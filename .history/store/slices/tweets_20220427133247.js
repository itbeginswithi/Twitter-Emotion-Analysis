import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
    name: 'tweets',
    initialState: {display: false, tweets: []}
})