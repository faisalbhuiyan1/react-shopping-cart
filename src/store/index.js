import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import myEventLocationSlice from "./slices/myEventLocationSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    myEventLocation: myEventLocationSlice,
  },
});
