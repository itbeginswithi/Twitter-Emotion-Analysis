import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
    name: 'tweets',
    initialState: {displayTweet: false, fetchingAnalysis: true, tweets: []}, 
    reducers: {
        displayTweetBox(state){
            state.displayTweet = true
        },
        hideTweetBox(state){ 
            state.displayTweet = false;
        },
        fetchingAnalysis(state, action){ 
            state.displayTweet = payload.boolean;
        }
    }
});

export const tweetsActions = tweetsSlice.actions;
export default tweetsSlice.reducer;