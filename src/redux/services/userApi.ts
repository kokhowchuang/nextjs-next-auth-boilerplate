import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};

type UserData = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<User>;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/users'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserData, null>({
      query: () => '/'
    })
  })
});

export const { useGetUsersQuery } = userApi;
