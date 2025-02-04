import { describe, expect, it } from "@jest/globals";
import { app } from "../index";
import request from "supertest";

describe("tests the sum function", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });


});


describe('tests the multiply function', () => {
    it('should return the multiplicaiton of two numbers', async () => {
       const res = await request(app).post('/multiply').send({
        a: 0,
        b: 4
       })

       expect(res.statusCode).toBe(200);
       expect(res.body.answer).toBe(0)
    })
})