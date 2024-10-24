import { configureStore } from '@reduxjs/toolkit'
import tweetReducer from './TweetSlice'
import userSlice from './UserSlice';

export const store = configureStore({
    reducer: {
        tweets: tweetReducer,
        userSlice: userSlice,  //name: isi dari slice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;