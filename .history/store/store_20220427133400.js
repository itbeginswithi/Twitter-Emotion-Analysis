import { configureStore } from "@reduxjs/toolkit";

import tweetsReducer from './slices/'

const store = configureStore({
    reducer: { 
        tweets: tweetsReducer
    }
})