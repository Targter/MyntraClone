// console.log("this is called")
// import itemslice;
import ItemSlice from "./ItemSlice";

// import Fetch Slice
import fetchStatusSlice from "./Fetching";
//
import BagSlice from "./BagSlice";
import { configureStore } from "@reduxjs/toolkit";

const MyntraStore = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    Bagitems: BagSlice.reducer,
  },
});

export default MyntraStore;
