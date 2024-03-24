import { configureStore } from '@reduxjs/toolkit'
import  resultReducer  from './slices/searchResult'

export const store = configureStore({
  reducer: {
    result:resultReducer
  },
})