// server.js
import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from "next/server";
export async function GET(req, res) {

  const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
  // =================================================
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://root:example@localhost:27017';
  const client = new MongoClient(url);
  const dbName = 'forums'; // database name
  await client.connect();

  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('register'); // collection name
  const user = await collection.find({ _id: new ObjectId(userId) }).toArray();
  //==========================================================
  if (user.length === 0) {
     return NextResponse.json({ error: 'User not found' });
  }
    // at the end of the process we need to send something back.
  return Response.json({user})
}
