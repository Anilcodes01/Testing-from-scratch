import { describe, expect, it, vi } from "vitest";
import { app } from "../index";
import request from "supertest";
import { prismaClient } from "../__mocks__/db";

// simple mocking
// vi.mock("../db", () => {
//   return {
//     prismaClient: {
//       request: {
//         create: vi.fn(),
//       },
//     },
//   };
// });

// Deep mocking - all the request functions is presend in the mocks folder

vi.mock("../db");

describe("tests the sum function", () => {
  it("should return the sum of two numbers", async () => {
    prismaClient.request.create.mockResolvedValue({
      id: 1,
      answer: 3,
      type: "sum",
      a: 1,
      b: 2,
    });

    vi.spyOn(prismaClient.request, "create");
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });

    expect(prismaClient.request.create).toHaveBeenCalledWith({
      data: {
        a: 1,
        b: 2,
        type: "sum",
        answer: 3,
      },
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
    expect(res.body.answer).toBe(3);
  });

  it("should fail when a number is too big", async () => {
    const res = await request(app).post("/sum").send({
      a: 200000,
      b: 3,
    });

    expect(res.body.message).toBe("Sorry we dont support big numbers...!");
    expect(res.statusCode).toBe(422);
  });
});

describe("tests the multiply function", () => {
  it("should return the multiplicaiton of two numbers", async () => {
    const res = await request(app).post("/multiply").send({
      a: 0,
      b: 4,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(0);
  });
});
