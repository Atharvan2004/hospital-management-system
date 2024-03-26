import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'

export const store = configureStore({
  reducer: {
    result:rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  },
})