export async function POST(req, res) {
  try {
    // Parse the JSON data from the request body
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('email');
    const email = searchParams.get('email');
    const pass = searchParams.get('pass');


    // Perform MongoDB operations
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'forums'; // database name

    await client.connect();
    console.log('Connected successfully to the server');

    const db = client.db(dbName);
    const collection = db.collection('register'); // collection name

    const findResult = await collection.find({
      username: username,
      email: email,
      pass: pass, 
    });

    let valid = false;
    if (findResult) {
      valid = true;
      console.log('Logged in successfully');
    } else {
      console.log('Login failed: wrong email or password');
    }

    res.json({ data: valid ? "valid" : "invalid" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
