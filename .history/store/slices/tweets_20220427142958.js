import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayTweet: false,
    fetchingAnalysis: true,
    tweetText: '', 
    tweetAuthor: {
        name: '',
        profile_image_url: '',
        created_at: ''
    },
    error: ''
};

const tweetBoxSlice = createSlice({
    name: 'tweetBox',
    initialState, 
    reducers: {
        displayTweetBox(state, action){
            state.displayTweet = action.payload.open;
            state.tweetText = action.payload.tweetText;
            state.tweetAuthor = action.payload.tweetAuthor;
        },
        fetchingAnalysis(state, action){ 
            state.fetchingAnalysis = action.payload;
        },
        analysisResults(state, action){ 
            
        }
    }
});

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;