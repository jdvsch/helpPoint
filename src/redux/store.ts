import { configureStore } from '@reduxjs/toolkit'
import authStateReducer from './slices/authState'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistAuthConfig = {
  key: 'root',
  storage,
  whitelist: ['modal', 'pageStatus', 'sidebar'],
  blacklist: []
}

const store = configureStore({
  reducer: {
    authState: persistReducer<ReturnType<typeof authStateReducer>>(persistAuthConfig, authStateReducer)
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store
