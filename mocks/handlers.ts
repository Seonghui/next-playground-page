// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/random", (req, res, ctx) => {
    return res(ctx.json("123"));
  }),
  rest.post("/login", async (req, res, ctx) => {
    const { username, password } = await req.json();
    // Persist user's authentication in the session
    const data = { username, password };
    // sessionStorage.setItem("auth", JSON.stringify(data));

    return res(
      // Respond with a 200 status code
      ctx.cookie("auth", JSON.stringify(data))
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const data = JSON.parse(sessionStorage.getItem("auth"));

    if (!data) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: data.username,
        password: data.password,
      })
    );
  }),
];
