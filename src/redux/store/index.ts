import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import restaurantsReducer from "../slices/restaurants";

let middlewares: any = [];
if (process.env.REACT_APP_NODE_ENV === "development") {
  middlewares = createLogger();
}

export default configureStore({
  reducer: {
    restaurantsData: restaurantsReducer,
  },
  devTools: process.env.REACT_APP_NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

// export type RootState = ReturnType<typeof rootReducer>;
