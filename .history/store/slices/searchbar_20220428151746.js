import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading, 
    error: ''
};

const searchbar = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {},
})