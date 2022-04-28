import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
    name: 'tweets',
    initialState: {display: false, tweets: []}, 
    reducers: {
        displayTweets(state){
            state.display = true
        },
        hideTweets(state){ 
            state.display = false;
        }
    }
});

export const tweetsActions = tweetsSlice.actions;
export default tweetsSlice.reducer;