import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
    name: 'tweets',
    initialState: {display: false, tweets: []}, 
    reducers: {
        displayTweets(state){
            state.display = true
        },
        hideTweets()
    }
});

export const tweetsActions = tweetsSlice.actions;
export default tweetsSlice.reducer;