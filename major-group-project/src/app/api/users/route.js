import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

export async function PUT(req, res) {
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'forums';

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('register');

        const { currentUsername, newUsername } = req.body;

        const result = await collection.updateOne({ username: currentUsername }, { $set: { username: newUsername } });
 console.log(result);
        if (result.modifiedCount > 0) {
            console.log('Username updated successfully');
            return res.status(200).json({ "data": true });
        } else {
            console.log('Username not updated');
            return res.status(400).json({ "data": false, "message": "Username not updated" });
        }
    } catch (error) {
        console.error("Failed to update username:", error);
        return res.status(500).json({ success: false, message: "Internal server error." });
    } finally {
        await client.close();
    }
}
