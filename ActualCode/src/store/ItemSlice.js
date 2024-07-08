// Create a seprate file of slice

import { createSlice } from "@reduxjs/toolkit";
// provide a default Initial value to Slice:
// this slice have to provide data :

// import default data from data object :
// import { items } from "../data/items";
const ItemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      // console.log("reducer", store, action);
      // action.payload give me the data

      return action.payload;
    },
  },
});

// add Action listners
export const ItemSliceAction = ItemSlice.actions;
export default ItemSlice;
