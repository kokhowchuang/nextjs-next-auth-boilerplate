import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';
import { stat } from 'fs';

interface IUser {
  id: number | null;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface IPagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

interface UserState {
  data: Array<IUser>;
  meta: IPagination;
  status: 'idle' | 'loading' | 'failed';
}

const initialState = {
  data: [],
  meta: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0
  },
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

        const pageMeta = {
          page: payload.page,
          per_page: payload.per_page,
          total: payload.total,
          total_pages: payload.total_pages
        };

        state.meta = pageMeta;
      }
    );
  }
});

export const { reset } = user.actions;
export default user.reducer;
