import { hash } from 'bcrypt';

export async function POST(req, res) {
  try {
    // Parse the JSON data from the request body
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');
    const email = searchParams.get('email');
    const pass = searchParams.get('pass');
    const dob = searchParams.get('dob');
    const address = searchParams.get('address');

   // Hash the password before storing it
   const saltRounds = 10; // You can change the number of salt rounds as needed
   const hashedPassword = await hash(pass, saltRounds);
    // Perform MongoDB operations
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'forums'; // database name

    await client.connect();
    console.log('Connected successfully to the server');

    const db = client.db(dbName);
    const collection = db.collection('register'); // collection name


    // Insert the user into the database 
    const findResult = await collection.insertOne({ 
      "username":username,
      "email":email,
      "pass": hashedPassword,
      "dob":dob,
      "address":address,
    });

    let valid = false; // Default value for valid
    if (findResult.insertedCount > 0) { // If the user was inserted successfully
        // save a little cookie to say we are authenticated
        cookies().set('auth', true); 
        // Set the username cookie
        cookies().set('username', username)
     
      valid = true; // Set valid to true
      console.log('Registered valid'); // Log that the user was registered
    } else {// If the user was not inserted successfully
      valid = false; // Set valid to false
      console.log('Not Registered');
    }

    // Return a JSON response
    res.json({ data: valid });
  } catch (error) {
    console.error('Error:', error);
    // Return an error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
