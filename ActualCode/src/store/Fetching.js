import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyfetching: false,
  },
  reducers: {
    markfetchDone: (state) => {
      state.fetchDone = true;
    },
    markfetchingStarted: (state) => {
      state.currentlyfetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyfetching = false;
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
