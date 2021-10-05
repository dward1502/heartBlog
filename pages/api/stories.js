import { connectToDatabase, getAllStories } from '../../lib/db';

async function handler(req, res) {
  let client;
  try {
    // eslint-disable-next-line no-unused-vars
    client = await connectToDatabase();
  } catch (error) {
    res.error(500).json({ message: 'Connecting to database failed' });
    return;
  }

  if(req.method === 'GET') {
      try {
          const documents = await getAllStories(client,'stories', {_id: -1})
          res.status(200).json({allStories:documents})
      } catch(error) {
          res.status(500).json({message:'Getting comments failed'})
      }
  }
  client.close()
}

export default handler;
