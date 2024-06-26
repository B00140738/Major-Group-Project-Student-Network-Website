import { cookies } from 'next/headers'


export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');
    const pass = searchParams.get('pass');

    const { MongoClient } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'forums';

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('register');

    // Find user by username
    const findResult = await collection.findOne({ "username": username });

    let valid = false;
    const bcrypt = require('bcrypt');
    if (findResult) { // Check if user was found
      let hashResult = bcrypt.compareSync(pass, findResult.pass); // Compare password
      if (hashResult) {
        valid = true;
        cookies().set('auth', true);
        cookies().set('username', username);
        cookies().set('userId', findResult._id.toString()); // Store userId as string
      }
    }

    return Response.json({ "data": "" + valid + "" });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}