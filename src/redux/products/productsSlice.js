import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./productInitialState";
import {
  createProductsThunk,
  deleteProductsThunk,
  getProductsThunk,
} from "./thunk";

const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const arrThunks = [createProductsThunk, deleteProductsThunk, getProductsThunk];

const fn = (type) => arrThunks.map((el) => el[type]);

const handlePending = (state, action) => {
  state.isLoading = true;
};

// const handleFulfilled = (state) => {
//   state.isLoading = false;
//   state.error = "";
// };

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.products = payload;
  state.error = "";
};
const handleFulfilledCreate = (state, { payload }) => {
  state.isLoading = false;
  state.products.push(payload);
  state.error = "";
};
const handleFulfilledDel = (state, { payload }) => {
  state.isLoading = false;
  state.products = state.products.filter((el) => el.id !== payload.id);
  state.error = "";
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  //// V1
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getProductsThunk.pending, handlePending)
  //       .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
  //       .addCase(getProductsThunk.rejected, handleRejected)
  //       .addCase(createProductsThunk.pending, handlePending)
  //       .addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
  //       .addCase(createProductsThunk.rejected, handleRejected)
  //       .addCase(deleteProductsThunk.pending, handlePending)
  //       .addCase(deleteProductsThunk.fulfilled, handleFulfilledDel)
  //       .addCase(deleteProductsThunk.rejected, handleRejected);
  //   },
  // // V2
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
  //       .addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
  //       .addCase(deleteProductsThunk.fulfilled, handleFulfilledDel)
  //       .addMatcher(
  //         isAnyOf(
  //           getProductsThunk.pending,
  //           createProductsThunk.pending,
  //           deleteProductsThunk.pending
  //         ),
  //         handlePending
  //       )
  //       .addMatcher(
  //         isAnyOf(
  //           getProductsThunk.rejected,
  //           createProductsThunk.rejected,
  //           deleteProductsThunk.rejected
  //         ),
  //         handleRejected
  //       );
  //   },
  //// V3
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
      .addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteProductsThunk.fulfilled, handleFulfilledDel)
      .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected);
  },
});

export const productReducer = productSlice.reducer;
