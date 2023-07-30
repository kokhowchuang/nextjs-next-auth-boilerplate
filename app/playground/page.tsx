'use client';

import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import UsersTable from '../table';
import Pagination from '../pagination';
import { useGetUsersQuery } from '../../src/redux/services/userApi';
import { useDispatch } from 'react-redux';

export const dynamic = 'force-dynamic';

export default function PlaygroundPage({
  searchParams
}: {
  searchParams: { q: string; page: number };
}) {
  const dispatch = useDispatch();
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
          total={data?.total || 1}
          limit={data?.per_page || 1}
          currentPage={data?.page || 1}
          totalPages={data?.total_pages || 1}
        />
      </Card>
    </main>
  );
}
