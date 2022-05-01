import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showUserProfile: false,
  tweets: [],
  tweetsAnalysis: [],
  author: {
    username: "",
    name: "",
    userImage: "",
  },
  tagName: '',
  authors: [], //[{author}]
};

const tweetsTimeline = createSlice({
  name: "tweetsTimeline",
  initialState,
  reducers: {
    setTweets(state, action) {
      state.tweets = action.payload.data;
      state.tagName = action.payload?.tagName;
    },
    setAuthor(state, action) {
      const { username, name, userImage } = action.payload;
      state.author.username = username;
      state.author.name = name;
      //To get the original profile picture size
      //https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/user-profile-images-and-banners
      // state.author.userImage = authorObj?.profile_image_url?.replace('_normal', '');
      state.author.userImage = userImage?.replace("_normal", "");
    },
    setAuthors(state, action){
      state.authors = action.payload;
      state.showUserProfile = true;
    },
    setTweetsAnalysis(state, action) {
      state.tweetsAnalysis = action.payload;
    },
    clearTweets(state) {
      state.tweets = [];
      state.author = {
        username: "",
        name: "",
        userImage: "",
      };
      state.authors = [];
      state.tweetsAnalysis = [];
      state.showUserProfile = false;
    },
  },
});

export const timelineActions = tweetsTimeline.actions;
export default tweetsTimeline.reducer;