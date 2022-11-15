import { rest } from "msw";
import { SERVER_URL } from "../constant";
import { mockVenueListData, mockVenueDetailsData } from "./data";

export const handlers = [
  rest.get(`${SERVER_URL.RESTAURANTS_LIST}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockVenueListData));
  }),

  rest.get(`${SERVER_URL.RESTAURANT_DETAILS}/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockVenueDetailsData));
  }),
];
