/** Dependencies **/
import { configureStore } from '@reduxjs/toolkit';

/** Reducers **/
import addressReducer from './address/address.reducer';

const store = configureStore({
  reducer: {
    address: addressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
