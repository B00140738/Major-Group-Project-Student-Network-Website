export async function GET(req, res) {
 
  try {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')

       const { MongoClient } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);

    const dbName = 'forums';

    await client.connect();

    console.log('Connected successfully to the server');
    const db = client.db(dbName);
    const collection = db.collection('register');


    const findResult = await collection.find({"username": email, "pass":pass}).toArray();

    let valid = false;
    if (findResult) {
      valid = true;
      console.log('Logged in successfully');
    } else {
      valid = false;
      console.log('Login failed: wrong username or password');

    }
    return Response.json({ "data":"" + valid + ""})

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
}