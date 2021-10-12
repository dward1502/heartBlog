import {connectToDatabase,getAllStories} from './db'


export async function getTop3Stories() {
    const client = await connectToDatabase();
    
    const stories = await getAllStories(client, 'stories', { _id: -1 });
    const top3 = stories.splice(0,3)
    return top3; 
}

