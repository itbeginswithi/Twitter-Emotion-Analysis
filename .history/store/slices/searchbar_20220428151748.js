import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading, 
    error: ''
};

const searchbar = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        setIsLoading(state, action){
            state.loading = action.payload;
        },
        setError(state, action){ 
            state.error = action.payload.message;
        }
    },
})