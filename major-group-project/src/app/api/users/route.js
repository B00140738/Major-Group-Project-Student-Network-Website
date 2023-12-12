import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

export async function PUT(req, res) {
    
  try {
    const { searchParams } = new URL(req.url);
    const currentUsername = searchParams.get('username');
    const newUsername = searchParams.get('newUsername'); // New parameter for updated username
    const email = searchParams.get('email');
    const newPassword = searchParams.get('newPassword');

        // Connect to MongoDB
    const url = 'mongodb://root:example@localhost:27017/'; 
    const client = new MongoClient(url);
    const dbName = 'forums';
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('register');

    // Preparing the update object
    let updateObject = {};
        if (newUsername) {
             updateObject.username = newUsername;
        }
        if (email) {
            updateObject.email = email;
        }
        if (newPassword) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
            updateObject.pass = hashedPassword;
        }

    // Update user in the database
    const updateResult = await collection.updateOne(
            { "username": currentUsername },
            { $set: updateObject }
        );
        let valid = false;
    if (updateResult.modifiedCount > 0) {
            valid = true;
            console.log('Received PUT request with data:', req.body);
console.log('Update object:', updateObject);
console.log('Update result:', updateResult);
console.log('Is valid:', valid);
    } 
    else {
            valid = false;
    }
        return Response.json({ "data":"" + valid + ""})
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } 
}