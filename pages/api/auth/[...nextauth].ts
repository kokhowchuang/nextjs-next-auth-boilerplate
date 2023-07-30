import NextAuth, { NextAuthOptions } from 'next-auth';
import { authOptions } from '../../../lib/auth';

const handler = NextAuth(authOptions);

export default handler;
