import express from "express";
import { prismaClient } from "./db";
export const app = express();
app.use(express.json());

app.post("/sum", async (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a > 100000 || b > 100000) {
    res.status(422).json({
      message: "Sorry we dont support big numbers...!",
    });
    return;
  }

  const result = a + b;

  const request = await prismaClient.request.create({
    data: {
      a: a,
      b: b,
      answer: a + b,
      type: "sum",
    },
  });

  res.json({ answer: result, id: request.id });
});

app.post("/multiply", async (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  const result = a * b;

  await prismaClient.request.create({
    data: {
      a: a,
      b: b,
      answer: a * b,
      type: "Multiply",
    },
  });

  res.json({ answer: result });
});
