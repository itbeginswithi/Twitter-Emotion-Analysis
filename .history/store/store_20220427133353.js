import { configureStore } from "@reduxjs/toolkit";

import tw

const store = configureStore({
    reducer: { 
        tweets: tweetsReducer
    }
})