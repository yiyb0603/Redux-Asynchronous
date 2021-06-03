import { createSlice } from '@reduxjs/toolkit';
import { InitialStateType } from './counter.type';

const initialState: InitialStateType = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.value++;
    },

    decrease: (state) => {
      state.value--;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;