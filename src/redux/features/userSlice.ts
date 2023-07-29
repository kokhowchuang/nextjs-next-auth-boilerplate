import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';

interface IUser {
  id: number | null;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserState {
  data: Array<IUser>;
  filteredData: Array<IUser>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState = {
  data: [],
  filteredData: [],
  status: 'idle'
} as UserState;

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        state.data = payload.data;
      }
    );
  }
});

export const { reset } = user.actions;
export default user.reducer;
