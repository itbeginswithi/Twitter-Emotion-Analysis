import { configureStore } from "@reduxjs/toolkit";

import tweetsReducer from './slices/tweets';

const store = configureStore({
    reducer: { 
        tweets: tweetsReducer
    }
})