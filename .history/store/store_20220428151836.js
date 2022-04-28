import { configureStore } from "@reduxjs/toolkit";

import tweetBoxReducer from './slices/tweets';
import tweetBoxReducer from './slices/tweets';

const store = configureStore({
    reducer: { 
        tweetBox: tweetBoxReducer
    }
})

export default store;