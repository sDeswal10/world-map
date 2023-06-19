import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./redux/countriesSlice";

export const store = configureStore({
    reducer: {
        country: countriesReducer,
    },
});