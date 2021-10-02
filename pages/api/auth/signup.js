import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { username, email, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !username ||
    !password ||
    password.trim().length < 7
  ) {
    res
      .status(422)
      .json({
        message:
          'Invalid input - password should be at least 7 characters long',
      });
      return ;
  }

  const client = await connectToDatabase()
  const db = client.db()

  const existingUser = await db.collection('blogUsers').findOne({email:email})

  if(existingUser){
      res.status(422).json({message:'User exists already!'})
      client.close()
      return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('blogUsers').insertOne({
    username,
    email,
    password: hashedPassword,
  });
  res.status(201).json({message:'Created user!'})
  client.close()
}
export default handler;
