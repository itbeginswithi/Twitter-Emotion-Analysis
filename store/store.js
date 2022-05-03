import { configureStore } from "@reduxjs/toolkit";

import tweetBoxReducer from './slices/tweetBox';
import searchbarReducer from './slices/searchbar';
import tweetsModalReducer from './slices/tweetsModal';
import timelineReducer from './slices/tweetsTimeline';

const store = configureStore({
    reducer: { 
        tweetBox: tweetBoxReducer,
        searchbar: searchbarReducer,
        tweetsModal: tweetsModalReducer,
        tweetsTimeline: timelineReducer
    }
})

export default store;