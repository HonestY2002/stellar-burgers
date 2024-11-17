import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { getFeedsApi } from '@api';

export const getFeedsList = createAsyncThunk('feeds/getFeeds', getFeedsApi);

<<<<<<< HEAD
export type FeedState = {
=======
export type TFeedsState = {
>>>>>>> review
  orders: TOrder[];
  total: number;
  totalToday: number;
  loading: boolean;
  error: string | null | undefined;
};

<<<<<<< HEAD
export const initialState: FeedState = {
=======
export const initialState: TFeedsState = {
>>>>>>> review
  orders: [],
  total: 0,
  totalToday: 0,
  loading: true,
  error: null
};

<<<<<<< HEAD
export const feedSlice = createSlice({
=======
export const feedsSlice = createSlice({
>>>>>>> review
  name: 'feeds',
  initialState,
  reducers: {},
  selectors: {
    ordersSelector: (state) => state.orders,
    totalSelector: (state) => state.total,
    totalTodaySelector: (state) => state.totalToday,
    isLoadingSelector: (state) => state.loading,
    errorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFeedsList.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getFeedsList.fulfilled, (state, action) => {
        state.orders = action.payload.orders;
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
        state.loading = false;
      })
      .addCase(getFeedsList.rejected, (state, action) => {
        state.orders = [];
        state.total = 0;
        state.totalToday = 0;
        state.error = action.error.message;
        state.loading = false;
      });
  }
});

export const {
  ordersSelector,
  totalSelector,
  totalTodaySelector,
  isLoadingSelector,
  errorSelector
<<<<<<< HEAD
} = feedSlice.selectors;

export const feedsReducer = feedSlice.reducer;
=======
} = feedsSlice.selectors;

export const feedsReducer = feedsSlice.reducer;
>>>>>>> review
