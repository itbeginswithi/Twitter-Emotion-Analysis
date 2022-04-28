import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false, 
    error: ''
};

const searchbar = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        setIsLoading(state, action){
            state.isLoading = action.payload;
        },
        setError(state, action){ 
            state.error = action.payload.message;
        }
    },
})

export const searchbarActions =  searchbar.actions;
export default searchbar.reducer;

export const tweetsActions = tweetBoxSlice.actions;
export default tweetBoxSlice.reducer;