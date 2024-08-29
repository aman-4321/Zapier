import { Request, Response, Router } from "express";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../../../prisma/src/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";
import { authmiddleware } from "../middleware";

const router = Router();

router.post("/signup", async (req: Request, res: Response) => {
  const body = req.body;
  const parsedData = SignupSchema.safeParse(body);

  if (!parsedData.success) {
    console.log(parsedData.error);
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const userExists = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.username,
    },
  });

  if (userExists) {
    return res.status(403).json({
      message: "User Already Exists",
    });
  }

  const hashPassword = await bcrypt.hash(parsedData.data.password, 10);

  await prismaClient.user.create({
    data: {
      email: parsedData.data.username,
      password: hashPassword,
      name: parsedData.data.name,
    },
  });

  //TODO: await send email

  return res.json({
    message: "Please verify your account by checking your email",
  });
});

router.post("/signin", async (req: Request, res: Response) => {
  const body = req.body;
  const parsedData = SigninSchema.safeParse(body);

  if (!parsedData.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });

  if (!user) {
    return res.status(403).json({
      message: "Sorry credentials are incorrect",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_PASSWORD,
  );

  res.json({
    token: token,
  });
});

interface CustomRequest extends Request {
  id?: string;
}

router.get("/", authmiddleware, async (req: CustomRequest, res: Response) => {
  if (!req.id) {
    return res.status(400).json({ message: "ID is missing" });
  }

  const userId = parseInt(req.id, 10);

  if (isNaN(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  const user = await prismaClient.user.findFirst({
    where: {
      id: userId, // Now it's a number
    },
    select: {
      name: true,
      email: true,
    },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({
    user,
  });
});

export const userRouter = router;
