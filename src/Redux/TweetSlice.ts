import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tweet } from '../Types';


interface ITweetsState {
    tweets: Tweet[];
    currentUserId: string;
}

const initialState: ITweetsState = {
    tweets: [],
    currentUserId: "", //tentukan id User Yang Login
}

const tweetSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {
        addTweet: (state, action: PayloadAction<Tweet>) => {
            state.tweets.push(action.payload)
        },

        editTweet: (state, action: PayloadAction<Tweet>) => {
            const index = state.tweets.findIndex((t) => t.id === action.payload.id);
            if (index !== -1) state.tweets[index] = action.payload
        },

        deleteTweet: (state, action: PayloadAction<string>) => {
            state.tweets = state.tweets.filter((t) => t.id !== action.payload)
        },

        setTweet: (state, action: PayloadAction<Tweet[]>) => {
            state.tweets = action.payload
        },
    },
});

export const { addTweet,
    deleteTweet,
    editTweet,
    setTweet
} = tweetSlice.actions

export default tweetSlice.reducer