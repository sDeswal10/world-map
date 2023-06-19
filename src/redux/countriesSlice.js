import { createSlice } from "@reduxjs/toolkit";
import { getAllCountries } from "./countriesAction";

const initialState = {
    loading: false,
    countriesData: [],
    countryData: [],
    error: false,
    success: false,
    message: "",
    searchTerm: "ind",
    mapTerm: "ind",
};
export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        reset: (state)=>{
            state.loading = false;
            state.success = false;
            state.error = false;
            state.message = "";
        },
        setSearchTerm: (state,action)=>{
            state.searchTerm = action.payload;
        },
        setMapTerm: (state,action)=>{
            state.mapTerm = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllCountries.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getAllCountries.fulfilled, (state, action)=>{
            state.loading = false;
            state.countriesData = action.payload;
            state.success = true;
        })
        .addCase(getAllCountries.rejected, (state,action)=>{
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.countriesData = [];
        })
    }
});

export const {reset, setSearchTerm, setMapTerm} = countriesSlice.actions;
export default countriesSlice.reducer;