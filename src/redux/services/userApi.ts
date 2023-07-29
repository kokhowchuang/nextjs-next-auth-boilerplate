import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

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
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/users'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserData, { page: string; search: string }>({
      async queryFn(arg, queryApi, extraOptions, baseQuery) {
        if (!arg.search) {
          const result = await baseQuery(`?page=${arg.page}/`);

          return result.data
            ? { data: result.data as UserData }
            : { error: result.error as FetchBaseQueryError };
        } else {
          const result = await baseQuery(`?per_page=12/`);

          if (result.error) {
            return { error: result.error as FetchBaseQueryError };
          }

          const allUsers = result.data as UserData;
          const pattern = new RegExp(`^${arg.search}`, 'i');
          const filteredResult = allUsers.data.filter(
            (item) =>
              pattern.test(item.first_name) || pattern.test(item.last_name)
          );
          allUsers.data = filteredResult;
          allUsers.total = filteredResult.length;
          allUsers.per_page = filteredResult.length;

          return { data: allUsers as UserData };
        }
      }
    })
  })
});

export const { useGetUsersQuery } = userApi;
