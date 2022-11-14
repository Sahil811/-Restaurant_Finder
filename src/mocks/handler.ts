import { rest } from "msw";
import { mockVenueListData, mockVenueDetailsData } from "./data";

export const handlers = [
  rest.get("https://api.foursquare.com/v2/venues/search", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockVenueListData));
  }),

  rest.get("https://api.foursquare.com/v2/venues/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockVenueDetailsData));
  }),
];
