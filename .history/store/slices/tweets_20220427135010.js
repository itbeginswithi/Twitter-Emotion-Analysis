import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({Tweet
    name: 'tweets',
    initialState: {displayTweet: false, tweets: []}, 
    reducers: {
        displayTweetBox(state){
            state.displayTweet = true
        },
        hideTweetBox(state){ 
            state.displayTweet = false;
        }
    }
});

export const tweetsActions = tweetsSlice.actions;
export default tweetsSlice.reducer;