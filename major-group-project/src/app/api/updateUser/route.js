import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from "next/server";

const url = 'mongodb://root:example@localhost:27017/';
const client = new MongoClient(url);

const dbName = 'forums';

export async function PATCH(request) {
  try {
    const requestBody = await request.json();
    const { userId, newUsername, email, code, year, currentPassword, newPassword } = requestBody;

    await client.connect();
    const database = client.db(dbName);
    const usersCollection = database.collection('register');

    // Check if the current password matches the one stored in the database
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    if (!user || user.password !== currentPassword) {
      return NextResponse.error({ status: 400, body: 'Current password is incorrect' });
    }

    const updateResult = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: { username: newUsername, email: email, code: code, year: year, password: newPassword } }
    );

    if (updateResult.modifiedCount > 0) {
      return NextResponse.json({ message: 'User information updated successfully' });
    } else {
      return NextResponse.error({ status: 500, body: 'Failed to update user information' });
    }
  } catch (error) {
    console.error('Error updating user information:', error);
    return NextResponse.error({ status: 500, body: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
