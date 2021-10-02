import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect(
      'mongodb+srv://dward619:Pointers619@cluster0.okyoc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    return client;
}

