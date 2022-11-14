import { rest } from "msw";

export const handlers = [
  rest.get("https://api.foursquare.com/v2/venues/search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          response: {
            venues: [
              {
                id: "1",
                name: "Miso",
                location: {
                  address: "Tokyo",
                  distance: 12345,
                },
              },
              {
                id: "2",
                name: "Taki",
                location: {
                  address: "New York",
                  distance: 123456,
                },
              },
              {
                id: "3",
                name: "Yamil",
                location: {
                  address: "Kazikstan",
                  distance: 1234567,
                },
              },
            ],
          },
        },
      }),
    );
  }),
];
