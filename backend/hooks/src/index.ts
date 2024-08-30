import express, { Request, Response } from "express";
import { prismaClient } from "../../prisma/src/index";

const app = express();
app.use(express.json());

app.post("/hooks/catch/:userId/:zapId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const zapId = req.params.zapId;
  const body = req.body;

  await prismaClient.$transaction(async (tx) => {
    const run = await tx.zapRun.create({
      data: {
        zapId: zapId,
        metadata: body,
      },
    });

    await tx.zapRunOutbox.create({
      data: {
        zapRunId: run.id,
      },
    });
  });
  res.json({
    message: "Webhook received",
  });
});

app.listen(3000);
