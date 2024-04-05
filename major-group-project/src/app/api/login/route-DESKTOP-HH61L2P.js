import { cookies } from 'next/headers'


export async function GET(req, res) {
 //trty catch block to catch any errors
  try {
    // get the username and password from the query string
  const { searchParams } = new URL(req.url)
  // get the username and password from the query string
  const username = searchParams.get('username')
  const pass = searchParams.get('pass')
//   const { MongoClient } = require('mongodb');
       const { MongoClient } = require('mongodb');
       // Connection URL
    const url = 'mongodb://root:example@localhost:27017/';
    // Create a new MongoClient
    const client = new MongoClient(url);
   
    const dbName = 'forums';
    // Use connect method to connect to the server
    await client.connect();
    //mongodb connection to the database
    const db = client.db(dbName);
    const collection = db.collection('register');
    //mongoDb query sending the username and password to the database to check if it exists
    const findResult = await collection.find({"username": username}).toArray();
    
    let valid = false;
    //bcrypt to compare the password entered to the password in the database
    const bcrypt = require('bcrypt');
    //hashResult is true if the password entered matches the password in the database
    let hashResult = bcrypt.compareSync(pass, findResult[0].pass); // true
    //if the username and password are correct then valid is true
    if (findResult.length > 0 && hashResult == true) {
      valid = true;

    // save a little cookie to say we are authenticated
    cookies().set('auth', true);
    cookies().set('username', username)
     //if the username and password are incorrect then valid is false
    } else {
      valid = false;
    }
    //return the result to the client
    return Response.json({ "data":"" + valid + ""})
   //catch any errors
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
}