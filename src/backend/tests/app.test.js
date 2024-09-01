// import request from "supertest";
// import app from "../app.js";
const request = require("supertest");
const app = require("../app.js");

describe("App Test", () => {
  test("GET /tutor", async () => {
    const res = await request(app).get("/api/tutor/");
    console.log(res);
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toContain("json");
    expect(res.body[0].name).toBeDefined();
    expect(res.body[0].subjects).toBeDefined();
    expect(res.body[0].rate).toBeDefined();
  });

  describe("POST /auth/login", () => {
    let res, postBody;

    beforeAll(async () => {
      postBody = {
        email: "test@test.com",
        password: "test1",
      };
      res = await request(app).post("/api/auth/login/").send(postBody);
    });

    test("Successfully returns JSON content", async () => {
      expect(res.status).toBe(200);
      expect(res.headers["content-type"]).toContain("json");
    });

    test("Returned entry has an _id, content and category", async () => {
      expect(res.body.token).toBeDefined();
      expect(res.body.name).toBeDefined();
      expect(res.body.isAdmin).toBeDefined();
      expect(res.body.isAdmin).toBe(false);
      expect(res.body.message).toBeDefined();
      expect(res.body.message).toBe("Logged in successfully");
    });
  });
});
