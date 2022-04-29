import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    displayTweetBox: false,
    tweetDataExists: false
};

const tweetBoxSlice = createSlice({
    name: 'tweetBox',
    initialState, 
    reducers: {
        displayTweetBox(state, action){
            state.displayTweetBox = action.payload;
        },
        setTweetData(state, action){
            state.tweetDataExists = action.payload.dataExists;
        },
        setIsLoading(state, action){
            state.loading = action.payload;
        }
    }
});

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;