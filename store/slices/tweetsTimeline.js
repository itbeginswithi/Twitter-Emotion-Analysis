import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tweets: [],
    tweetsAnalysis: [],
    author: {
        username: '',
        name: '', 
        userImage: ''
    }
}

const tweetsTimeline = createSlice({
    name: 'tweetsTimeline',
    initialState,
    reducers: {
        setTweets(state, action){
            state.tweets = action.payload;
        },
        setAuthor(state, action){ 
            const authorObj = action.payload;
            state.author.username = authorObj.username;
            state.author.name = authorObj.name;
            state.author.userImage = authorObj?.profile_image_url?.replace('_normal', '');
        },
        setTweetsAnalysis(state, action){
            state.tweetsAnalysis = action.payload;
        },
        clearTweets(state){ 
            state.tweets = [];
            state.author = {
                username: '',
                name: '', 
                userImage: ''
            };
            state.tweetsAnalysis = [];
        }
    },
})

export const timelineActions = tweetsTimeline.actions;
export default tweetsTimeline.reducer;