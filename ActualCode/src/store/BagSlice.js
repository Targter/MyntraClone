import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "Bagitems",
  initialState: [],
  reducers: {
    additemID: (state, action) => {
      state.push(action.payload);
    },

    removeitemIDfrombag: (state, action) => {
      return state.filter((itemId) => action.payload !== itemId);
    },
  },
});

export const BagSliceAction = BagSlice.actions;
export default BagSlice;
