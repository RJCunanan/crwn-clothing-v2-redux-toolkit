import { createSlice } from '@reduxjs/toolkit';

// import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // Actions:
    setCurrentUser(state, action) {
      // Produces a new state object:
      state.currentUser = action.payload
    }
  }
})

// Pull off the actions that we want
export const { setCurrentUser } = userSlice.actions;

// Pull off the reducer
export const userReducer = userSlice.reducer;