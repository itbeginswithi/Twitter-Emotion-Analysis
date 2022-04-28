import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    displayTweetBox: false,
    fetchingAnalysis: true,
    tweetDataExists: false, 
    createdAt: '',
    tweetAuthor: {
        name: '',
        profile_image_url: '',
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
            // state.tweetText = action.payload.tweetText;
            // state.createdAt = action.payload.createdAt;
            // state.tweetAuthor = action.payload.tweetAuthor;
            state.tweetD
        },
        setIsLoading(state, action){
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