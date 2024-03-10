import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from "next/server";

    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);

    const dbName = 'forums';

// To handle a PATCH request to /api
export async function PATCH(request) {
  try {
    const requestBody = await request.json(); // Parse the request body as JSON
    const { userId, newUsername, email, address, year } = requestBody; // Access parsed JSON data
    
    console.log('Received request body:', requestBody); // Add this line to check the parsed body

    await client.connect();
    const database = client.db(dbName);
    const usersCollection = database.collection('register');

    const updateResult = await usersCollection.updateOne(
      { _id: new ObjectId(userId) }, // Filter by user ID
      { $set: { username: newUsername, email: email, address: address, year: year } } // Update fields
    );

    // Check if the update was successful
    let valid = false;
    if (updateResult.modifiedCount > 0) {
      valid = true;
      console.log('User information updated successfully', updateResult);
      return NextResponse.json('User information updated successfully'); // Sending response back
    } else {
      console.log('Failed to update user information');
    }

    return NextResponse.json({ valid:  'User information updated successfully'}); // Sending response back
  } catch (error) {
    console.error('Error updating user information:', error);
    return NextResponse.error({ status: 500, body: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
