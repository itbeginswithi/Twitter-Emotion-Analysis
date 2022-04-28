import { configureStore } from "@reduxjs/toolkit";

import tweetsReducer from './slices/tweets';

const store = configureStore({
    reducer: { 
        tweetBox: tweetsReducer
    }
})

export default store;