import { cookies } from 'next/headers'

export async function GET(req, res) {
 
  try {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username')
  const pass = searchParams.get('pass')

       const { MongoClient } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
   
    const dbName = 'forums';
    
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection('register');

    const findResult = await collection.find({"username": username, "pass":pass}).toArray();

    let valid = false;
    if (findResult.length > 0) {
      valid = true;

    // save a little cookie to say we are authenticated
    cookies().set('auth', true);
    cookies().set('username', username)
     
    } else {
      valid = false;
    }
    return Response.json({ "data":"" + valid + ""})
   
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
}