/** Dependencies **/
import { configureStore } from '@reduxjs/toolkit';

/** Reducers **/
import addressReducer from './address/address.reducer';

const store = configureStore({
  reducer: {
    address: addressReducer,
  },
});

export default store;
