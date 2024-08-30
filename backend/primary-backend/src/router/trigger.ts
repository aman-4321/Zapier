import { Request, Response, Router } from "express";
import { prismaClient } from "../../../prisma/src/index";

const router = Router();

router.get("/available", async (req: Request, res: Response) => {
  const availableTrigger = await prismaClient.availableAction.findMany({});
  res.json({
    availableTrigger,
  });
});

export const triggerRouter = router;
