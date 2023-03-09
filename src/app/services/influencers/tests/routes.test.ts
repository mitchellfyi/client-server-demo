import request from "supertest";
import express from "express";
import router from "../routes";

const app = express();
app.use("/", router);

describe("routes", () => {
  it("responds to /", async () => {
    const res = await request(app).get("/");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(10);
  });
});
