import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;
