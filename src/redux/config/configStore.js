import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../slices/dataSlice";

const store = configureStore({
  reducer: {
    datas: dataSlice
  }
})

export default store;