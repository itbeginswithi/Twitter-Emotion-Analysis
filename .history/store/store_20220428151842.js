import { configureStore } from "@reduxjs/toolkit";

import tweetBoxReducer from './slices/tweets';
import searchbarReducer from './slices/tweets';

const store = configureStore({
    reducer: { 
        tweetBox: tweetBoxReducer
    }
})

export default store;