require('dotenv').config()
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();
        console.log(credentials)
        const usersCollection = client.db().collection('blogUsers');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No User Found!');
        }

        console.log(credentials.password);
        console.log(user.password);
        const isValid = await verifyPassword(credentials.password, user.password);
        console.log(isValid)
        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }
        client.close();
        return { name: user.username };
      },
    }),
  ],
});
