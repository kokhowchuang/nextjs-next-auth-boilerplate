'use client';

import { useEffect, useState } from 'react';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import Pagination from './pagination';
import { useAppSelector } from '../src/redux/hooks';
import { useGetUsersQuery } from '../src/redux/services/userApi';
import { setFilter } from '../src/redux/features/userSlice';
import { useDispatch } from 'react-redux';

// export const dynamic = 'force-dynamic';

export default function IndexPage({
  searchParams
}: {
  searchParams: { q: string; page: number };
}) {
  const dispatch = useDispatch();
  const filterData = useAppSelector((state) => state.userReducer.filteredData);
  const search = searchParams.q ?? '';
  const page = searchParams.page ?? 1;

  const { isLoading, isFetching, data, error } = useGetUsersQuery({
    page: page.toString(),
    search
  });

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users retrieved from Zurich Insurance.</Text>
      <Search />
      <Card className="mt-6">
        {error ? (
          <p>Oh no, there was an error</p>
        ) : isLoading || isFetching ? (
          <p>Loading...</p>
        ) : data ? (
          <UsersTable users={data.data} />
        ) : null}
        <Pagination
          total={data?.total}
          limit={data?.per_page}
          currentPage={data?.page}
          totalPage={data?.total_pages}
        />
      </Card>
    </main>
  );
}
