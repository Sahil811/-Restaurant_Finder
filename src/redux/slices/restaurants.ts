import { createSlice, createAsyncThunk, isPending } from "@reduxjs/toolkit";
import { fetchUtility } from "../fetchUtility";
import { SERVER_URL, FOURSQUARE_CLIENT_DETAILS } from "../../constant";
import { searchParamsType, initialStateType } from "./types";

const parameters: searchParamsType = {
  client_id: FOURSQUARE_CLIENT_DETAILS.CLIENT_ID,
  client_secret: FOURSQUARE_CLIENT_DETAILS.CLIENT_SECRET,
  v: "20180725",
};

export const restaurantsListActionCreator = createAsyncThunk(
  "restaurantList/import",
  async (payload: { searchLocation: string; query: string }) => {
    const endPoint: string = `${SERVER_URL.RESTAURANTS_LIST}?`;
    const listParameters: searchParamsType = {
      categoryId: "4d4b7105d754a06374d81259",
      ll: payload?.searchLocation,
      query: payload?.query,
      radius: "1000",
      limit: "10",
      ...parameters,
    };
    const { data } = await fetchUtility({
      method: "get",
      // @ts-expect-error
      url: `${endPoint}${new URLSearchParams(listParameters).toString()}`,
      data: payload,
    });
    return data;
  },
);

const isPendingAction = isPending(restaurantsListActionCreator);

const initialState: initialStateType = {
  list: [],
  details: null,
  loading: false,
  error: null,
  message: null,
};

export const restaurantsSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(restaurantsListActionCreator.fulfilled, (state, action) => {
      state.loading = false;
      // @ts-expect-error
      state.list = action?.payload?.response?.venues;
    });
    builder.addCase(restaurantsListActionCreator.rejected, (state, action) => {
      state.loading = false;
      state.message = action?.payload;
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.loading = true;
    });
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    );
  },
});

// export const {} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
