import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import restaurantsReducer from "../slices/restaurants";

let middlewares: any = [];
if (process.env.NODE_ENV !== "production") {
  middlewares = createLogger();
}

export default configureStore({
  reducer: {
    restaurantsData: restaurantsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

// export type RootState = ReturnType<typeof rootReducer>;
