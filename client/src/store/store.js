import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import resultReducer from './slices/searchResult';
import staffSlice from './slices/staffSlice';
import doctorSlice from './slices/doctorSlice';
import patientSlice from './slices/patientSlice';

// Define the persistConfig
const persistConfig = {
  key: 'root',
  storage,
  version:1,
};

const rootReducer = combineReducers({
  result: resultReducer,
  staff: staffSlice,
  doctor: doctorSlice,
  patient: patientSlice,
});

// Wrap your root reducer with the persistReducer
const persistedReducer = persistReducer(persistConfig,rootReducer );

// Create the Redux store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Create the persisted store
export const persistor = persistStore(store);
