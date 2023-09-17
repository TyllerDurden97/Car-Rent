import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/phonebookSlice'
import {authReducer} from './auth/authSlice'
import storage from 'redux-persist/lib/storage'
import {
   persistStore,
  persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';

const authPersistConfig = {
   key: 'auth',
   storage,
   whitelist: ['token'],
}

export const store = configureStore({
   reducer: {
      phonebook: contactsReducer,
      auth: persistReducer(authPersistConfig, authReducer),
   },  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});  

export const persistor = persistStore(store);
