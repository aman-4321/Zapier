import { Request, Response, Router } from "express";
import { ZapCreateSchema } from "../types";
import { prismaClient } from "../../../prisma/src/index";
import { authmiddleware } from "../middleware";

const router = Router();

interface CustomRequest extends Request {
  id?: string;
}

router.post("/", authmiddleware, async (req: CustomRequest, res: Response) => {
  const id = req.id;

  if (!id || isNaN(parseInt(id, 10))) {
    return res.status(400).json({
      message: "Invalid or missing user ID",
    });
  }

  const userId = parseInt(id, 10);

  const body = req.body;
  const parsedData = ZapCreateSchema.safeParse(body);

  if (!parsedData.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  try {
    const zapId = await prismaClient.$transaction(async (tx) => {
      const zap = await tx.zap.create({
        data: {
          userId: userId,
          triggerId: "",
          actions: {
            create: parsedData.data.actions.map((x, index) => ({
              actionId: x.availableActionId,
              sortingOrder: index,
              metadata: x.actionMetaData,
            })),
          },
        },
      });

      const trigger = await tx.trigger.create({
        data: {
          triggerId: parsedData.data.availableTriggerId,
          zapId: zap.id,
        },
      });

      await tx.zap.update({
        where: {
          id: zap.id,
        },
        data: {
          triggerId: trigger.id,
        },
      });

      return zap.id;
    });

    return res.json({ zapId });
  } catch (error) {
    console.error("Error creating zap:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.get("/", authmiddleware, async (req: CustomRequest, res: Response) => {
  const id = req.id;

  if (!id || isNaN(parseInt(id, 10))) {
    return res.status(400).json({
      message: "Invalid or missing user ID",
    });
  }

  const userId = parseInt(id, 10);

  const zaps = await prismaClient.zap.findMany({
    where: {
      userId: userId,
    },
    include: {
      actions: {
        include: {
          type: true,
        },
      },
      trigger: {
        include: {
          type: true,
        },
      },
    },
  });

  return res.json({
    zaps,
  });
});

router.get(
  "/:zapId",
  authmiddleware,
  async (req: CustomRequest, res: Response) => {
    const id = req.id;
    const zapId = req.params.zapId;

    if (!id || isNaN(parseInt(id, 10))) {
      return res.status(400).json({
        message: "Invalid or missing user ID",
      });
    }

    const userId = parseInt(id, 10);

    const zap = await prismaClient.zap.findFirst({
      where: {
        id: zapId,
        userId: userId,
      },
      include: {
        actions: {
          include: {
            type: true,
          },
        },
        trigger: {
          include: {
            type: true,
          },
        },
      },
    });
    return res.json({
      zap,
    });
  },
);

export const zapRouter = router;
