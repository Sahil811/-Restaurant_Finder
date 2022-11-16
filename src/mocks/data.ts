const mockVenueListData = {
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
};

const mockVenueDetailsData = {
  name: "Miso",
  rating: 4,
  bestPhoto: {
    prefix: "/",
    suffix: "/",
  },
  location: {
    address: "Tokyo",
    crossStreet: "minato street",
    city: "minato",
    country: "Japan",
  },
  tips: {
    groups: [
      {
        items: [
          {
            id: 123,
            photourl: "/",
            createdAt: "Nov 01, 2012",
            text: "Good!.",
            user: {
              firstName: "Jhon",
              lastName: "Snow",
            },
          },
        ],
      },
    ],
  },
};

export { mockVenueListData, mockVenueDetailsData };
