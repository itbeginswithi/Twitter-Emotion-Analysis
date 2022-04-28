import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
    name: 'tweets',
    initialState: {display: false, tweets: []}, 
    reducers: {
        displayTweetBox(state){
            state.display = true
        },
        hideTweetBox(state){ 
            state.display = false;
        }
    }
});

export const tweetsActions = tweetsSlice.actions;
export default tweetsSlice.reducer;