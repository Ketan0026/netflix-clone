import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/user/userSlice";
import homeSlice from "../features/user/homeSlice";

export default configureStore({
  reducer: {
    user: useReducer,
    home: homeSlice,
  },
});
