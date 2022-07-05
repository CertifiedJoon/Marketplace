import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../features/header/headerSlice'
import itemListSlice from '../features/item/itemListSlice'
import itemSlice from '../features/item/itemSlice'
import userProfileSlice from '../features/user/userProfileSlice'
import userSlice from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    header: headerReducer,
    items: itemListSlice,
    item: itemSlice,
    user: userSlice,
    userProfile: userProfileSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
