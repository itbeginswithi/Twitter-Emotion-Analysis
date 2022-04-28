import { configureStore } from "@reduxjs/toolkit";

import tweetBoxReducer from './slices/tweets';
import searchbarReducer from './slices/searchbar';

const store = configureStore({
    reducer: { 
        tweetBox: tweetBoxReducer.apply,
        tweetBox: tweetBoxReducer
    }
})

export default store;