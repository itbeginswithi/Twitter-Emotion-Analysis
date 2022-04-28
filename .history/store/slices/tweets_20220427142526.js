import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayTweet: false,
    fetchingAnalysis: true,
    tweet: '', 
    tweetAuthor: {
        name: '',
        profile_image_url: '',
        created_at: ''
    },
    errors: []
};

const tweetBoxSlice = createSlice({
    name: 'tweetBox',
    initialState, 
    reducers: {
        displayTweetBox(state, action){
            state.displayTweet = action.payload.open;
            state.tweetText = action.payload.tweetText;
            state.tweetText = action.payload.tweetAuthor;
        },
        fetchingAnalysis(state, action){ 
            state.fetchingAnalysis = action.payload;
        }
    }
});

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;