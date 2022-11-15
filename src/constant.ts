const SERVER_URL = {
  RESTAURANTS_LIST: "https://api.foursquare.com/v2/venues/search",
  RESTAURANT_DETAILS: "https://api.foursquare.com/v2/venues",
};

const FOURSQUARE_CLIENT_DETAILS = {
  CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
  CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECREATE,
};

export { SERVER_URL, FOURSQUARE_CLIENT_DETAILS };
