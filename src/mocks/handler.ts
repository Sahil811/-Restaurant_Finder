import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("username");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authenticated",
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        firstName: "John",
      }),
    );
  }),
];
