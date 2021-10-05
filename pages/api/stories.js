import { connectToDatabase} from '../../lib/db'

async function handler(req,res) {
    if(req.method === 'GET') {
        const client = await connectToDatabase()
        const db = client.db()

        const stories =  db.collection('stories').find()

        res.status(201).json({message:'Successfully grabbed stories', data: stories})

    }
}
export default handler;