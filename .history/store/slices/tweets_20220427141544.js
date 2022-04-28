import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

const tweetBoxSlice = createSlice({
    name: 'tweetBox',
    initialState: {displayTweet: false, fetchingAnalysis: true, tweets: []}, 
    reducers: {
        displayTweetBox(state, action){
            state.displayTweet = action.payload;
        },
        fetchingAnalysis(state, action){ 
            state.fetchingAnalysis = action.payload;
        }
    }
});

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;