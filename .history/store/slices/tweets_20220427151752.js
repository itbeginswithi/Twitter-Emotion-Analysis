import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
            state.displayTweetBox = action.payload.displayTweetBox;
            state.tweetText = action.payload.tweetText;
            state.tweetAuthor = action.payload.tweetAuthor;
            console.log({display: state.displayTweetBox});
        },
        fetchingAnalysis(state, action){ 
            state.fetchingAnalysis = action.payload;
        },
        tweetAnalysis(state, action){ 
            state.tweetAnalysis = action.payload;
        },
        setError(state, action){ 
            state.error = action.payload.message;
        }
    }
});

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;