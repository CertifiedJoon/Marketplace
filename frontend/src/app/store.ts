import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import membershipSlice from '../features/community/membershipSlice'
import headerReducer from '../features/header/headerSlice'
import itemListSlice from '../features/item/itemListSlice'
import itemSlice from '../features/item/itemSlice'
import userProfileSlice from '../features/user/userProfileSlice'
import userSlice from '../features/user/userSlice'
import eventFormSlice from '../features/event/eventFormSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['header', 'user', 'userProfile', 'membership'],
}

export const rootReducer = combineReducers({
  header: headerReducer,
  items: itemListSlice,
  item: itemSlice,
  user: userSlice,
  userProfile: userProfileSlice,
  membership: membershipSlice,
  eventForm: eventFormSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
