/** Dependencies **/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Interfaces **/
import { IAddress } from '../../interfaces/address.interface';

export interface AddressState {
  data: IAddress;
}

const initialAddressState: AddressState = {
  data: {
    ip: '',
    isp: '',
    city: '',
    country: '',
    position: [0, 0],
    postalCode: '',
    timezone: '',
  },
};

const addressSlice = createSlice({
  name: 'address',
  initialState: initialAddressState,
  reducers: {
    setAddress(state: AddressState, action: PayloadAction<IAddress>) {
      state.data = action.payload;
    },
  },
});

export const addressActions = addressSlice.actions;

export default addressSlice.reducer;
