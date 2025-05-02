import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// Простая проверка, позже заменишь на БД
				if (credentials?.username === 'admin' && credentials.password === 'admin') {
					return { id: '1', name: 'Admin' };
				}
				return null;
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: 'jwt' },
});

export { handler as GET, handler as POST };
