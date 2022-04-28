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
    tweetAnalysis: [],
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
        tweetAnalysis(state, action){ 
            state.tweetAnalysis = action.payload;
        },
        apiError(state, action){ 
            state.
        }
    }
});

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;