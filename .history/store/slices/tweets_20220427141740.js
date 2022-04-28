import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayTweet: false,
    fetchingAnalysis: true,
    tweet: '', 
    errors: []
};

const tweetBoxSlice = createSlice({
    name: 'tweetBox',
    initialState, 
    reducers: {
        displayTweetBox(state, action){
            state.displayTweet = action.payload.open;
        },
        fetchingAnalysis(state, action){ 
            state.fetchingAnalysis = action.payload;
        }
    }
});

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;