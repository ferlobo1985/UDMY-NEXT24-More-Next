const { MongoClient, ServerApiVersion} = require('mongodb');

let cachedClient = null;
let cacheDb = null;


if (!process.env.MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    )
  }

if (!process.env.MONGODB_DB) {
    throw new Error(
      'Please define the MONGODB_DB environment variable inside .env.local'
    )
}


export async function connectToDatabase(){
    if(cachedClient && cacheDb){
        return { client:cachedClient,db:cacheDb}
    }

    const client = await MongoClient.connect(process.env.MONGODB_URI,{
        serverApi:{
            version:ServerApiVersion.v1,
            strict:true,
            deprecationErrors:true
        }
    });

    const db = client.db(process.env.MONGODB_DB);

    cachedClient = client;
    cacheDb = db;
    return {client,db}
}