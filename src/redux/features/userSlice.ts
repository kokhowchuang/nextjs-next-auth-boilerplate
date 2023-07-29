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
    reset: () => initialState,
    setFilter(state, action: PayloadAction<string>) {
      const pattern = new RegExp(`^${action.payload}`, 'i');
      state.filteredData = state.data.filter(
        (item) => pattern.test(item.first_name) || pattern.test(item.last_name)
      );
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        state.data = payload.data;
        state.filteredData = state.data;
      }
    );
  }
});

export const { reset, setFilter } = user.actions;
export default user.reducer;
