export { default } from 'next-auth/middleware';

// secure the playground page using middleware
export const config = { matcher: ['/playground'] };
