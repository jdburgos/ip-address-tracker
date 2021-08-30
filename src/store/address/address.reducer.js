/** Dependencies **/
import { createSlice } from '@reduxjs/toolkit';

const initialAddressState = { data: { position: [0, 0] } };

const addressSlice = createSlice({
  name: 'address',
  initialState: initialAddressState,
  reducers: {
    setAddress(state, action) {
      state.data = action.payload;
    },
  },
});

export const addressActions = addressSlice.actions;

export default addressSlice.reducer;
