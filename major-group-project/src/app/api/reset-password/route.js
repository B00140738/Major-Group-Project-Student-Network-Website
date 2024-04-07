// api/reset-password.js

import { cookies } from 'next/headers';

export async function PUT(req, res) {
    try {
        const { username, password } = req.body;
        const { MongoClient } = require('mongodb');
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('register');
        const updateResult = await collection.updateOne({ username }, { $set: { password } });

        if (updateResult.modifiedCount === 1) {
            return res.status(200).json({ data: "true" });
        } else {
            return res.status(400).json({ data: "false" });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
