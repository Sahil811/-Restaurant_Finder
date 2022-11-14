import { rest } from "msw";
import { mockVenueListData } from "./data";

export const handlers = [
  rest.get("https://api.foursquare.com/v2/venues/search", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockVenueListData));
  }),
];
