import { Response } from '@sveltejs/kit';
// ... (other imports)

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');
    const pass = searchParams.get('pass');

    const { MongoClient } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);

    const dbName = 'forums';

    await client.connect();

    console.log('Connected successfully to the server');
    const db = client.db(dbName);
    const collection = db.collection('register');

    const findResult = await collection.find({ "username": username, "pass": pass }).toArray();

    let valid = false;
    let redirectURL = ''; // Initialize redirectURL

    if (findResult.length > 0) {
      valid = true;
      console.log('Logged in successfully');
      // Set the redirect URL to your dashboard page
      redirectURL = '/dashboard';
    } else {
      valid = false;
      console.log('Login failed: wrong username or password');
    }

    // Return a response with the validation status and redirect URL
    return Response.json({ "data": "" + valid + "", "redirectURL": redirectURL });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
