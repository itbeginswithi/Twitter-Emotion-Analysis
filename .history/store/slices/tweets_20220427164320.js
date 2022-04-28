import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    displayTweetBox: false,
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
            state.displayTweetBox = action.payload;
        },
        setTweetData(state, action){
            state.tweetText = action.payload.tweetText;
            state.tweetAuthor = action.payload.tweetAuthor;
            console.log('u are here')
        },
        fetchingTweet(state, action){
            state.loading = action.payload;
        },
        fetchingAnalysis(state, action){ 
            state.fetchingAnalysis = action.payload;
        },
        setTweetAnalysis(state, action){ 
            state.tweetAnalysis = action.payload;
        },
        setError(state, action){ 
            state.error = action.payload.message;
        }
    }
});

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;