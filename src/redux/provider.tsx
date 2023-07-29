'use client';

import { NextAuthProvider } from '../../app/providers';
import { store } from './store';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <Provider store={store}>{children}</Provider>
    </NextAuthProvider>
  );
}
