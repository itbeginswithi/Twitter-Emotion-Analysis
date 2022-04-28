import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    displayTweetBox: false,
    tweetDataExists: false, 
    error: ''
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
        },
        setTweetAnalysis(state, action){ 
            state.tweetAnalysis = action.payload;
        },
        setError(state, action){ 
            state.error = action.payload.message;
        }
    }
});

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;