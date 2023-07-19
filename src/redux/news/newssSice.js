import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./newsInitialState";
import { getNewsSearchThunk, getNewsThunk } from "./thunk";

const handlePending = (state, action) => {
  state.status = "pending";
};
const handleFulfilled = (state, action) => {
  state.status = "fulfilled";
  state.news = action.payload.articles;
  state.error = "";
};
const handleRejected = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const customArr = [getNewsThunk, getNewsSearchThunk];
const fn = (status) => {
  return customArr.map((el) => el[status]);
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  // //------V1 extraReducers---------------------
  // extraReducers: {
  //   [getNewsThunk.pending]: (state, action) => {
  //     state.status = "pending";
  //   },
  //   [getNewsThunk.fulfilled]: (state, action) => {
  //     state.status = "fulfilled";
  //     state.news = action.payload.articles;
  //     state.error = "";
  //   },
  //   [getNewsThunk.rejected]: (state, action) => {
  //     state.status = "rejected";
  //     state.error = action.payload;
  //   },
  // },
  // // ------V2 extraReducers используем builder---------------------
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getNewsThunk.pending, (state, action) => {
  //       state.status = "pending";
  //     })
  //     .addCase(getNewsThunk.fulfilled, (state, action) => {
  //       state.status = "fulfilled";
  //       state.news = action.payload.articles;
  //       state.error = "";
  //     })
  //     .addCase(getNewsThunk.rejected, (state, action) => {
  //       state.status = "rejected";
  //       state.error = action.payload;
  //     });
  // },
  // ------V3 extraReducers выносим функции---------------------
  extraReducers: (builder) => {
    builder
      .addCase(getNewsThunk.pending, handlePending)
      .addCase(getNewsThunk.fulfilled, handleFulfilled)
      .addCase(getNewsThunk.rejected, handleRejected)
      .addCase(getNewsSearchThunk.pending, handlePending)
      .addCase(getNewsSearchThunk.fulfilled, handleFulfilled)
      .addCase(getNewsSearchThunk.rejected, handleRejected);
  },

  // // --------V4 extraReducers используем ddMatcher-------------------

  // extraReducers: (builder) => {
  //   builder
  //     .addMatcher(
  //       isAnyOf(getNewsThunk.pending, getNewsSearchThunk.pending),
  //       handlePending
  //     )
  //     .addMatcher(
  //       isAnyOf(getNewsThunk.fulfilled, getNewsSearchThunk.fulfilled),
  //       handleFulfilled
  //     )
  //     .addMatcher(
  //       isAnyOf(getNewsThunk.rejected, getNewsSearchThunk.rejected),
  //       handleRejected
  //     );
  // },
  // // ------V5 extraReducers сокращаем массив---------------------
  // extraReducers: (builder) => {
  //   builder
  //     .addMatcher(isAnyOf(...fn("pending")), handlePending)
  //     .addMatcher(isAnyOf(...fn("fulfilled")), handleFulfilled)
  //     .addMatcher(isAnyOf(...fn("rejected")), handleRejected);
  // },
});

export const newsReducer = newsSlice.reducer;

// ------------------------------------------------------------------
// export const getNewsThunk = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(newsSlice.actions.fetching());
//       const data = await getTopNews();
//       dispatch(newsSlice.actions.fetchSuccess(data));
//     } catch (error) {
//       dispatch(newsSlice.actions.fetchError(error));
//     }
//     return;
//   };
// };

// export const initialState = {
//   news: [],
//   status: "idle",
//   error: "",
// };

// const newsSlice = createSlice({
//   name: "news",
//   initialState,
//   reducers: {
//     fetching: (state, action) => {
//       state.status = "pending";
//     },
//     fetchSuccess: (state, action) => {
//       state.status = "fulfilled";
//       state.news = action.payload.articles;
//       state.error = "";
//     },
//     fetchError: (state, action) => {
//       state.status = "rejected";
//       state.error = action.payload;
//     },
//   },
// });

// export const newsReducer = newsSlice.reducer;
