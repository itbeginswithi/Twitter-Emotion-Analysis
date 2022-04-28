import { configureStore } from "@reduxjs/toolkit";

import tweetBoxReducer from './slices/tweets';
import searchbar from './slices/tweets';

const store = configureStore({
    reducer: { 
        tweetBox: tweetBoxReducer
    }
})

export default store;