'use client';

import { useEffect, useState } from 'react';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import Example from './pagination';

// export const dynamic = 'force-dynamic';

export default function IndexPage({
  searchParams
}: {
  searchParams: { q: string; page: number };
}) {
  const search = searchParams.q ?? '';
  const page = searchParams.page ?? 1;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.slingacademy.com/v1/sample-data/users?offset=${page}&search=${search}`
      );
      const users = await response.json();

      return users['users'];
    }

    fetchData().then((result) => setUsers(result));
  }, [page, search]);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users retrieved from Zurich Insurance.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
        <Example totalPosts="88" />
      </Card>
    </main>
  );
}
