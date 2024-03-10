// api/createNotification.js

export async function POST(req, res) {
    const { MongoClient, ObjectId } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const dbName = 'forums';

    try {
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db(dbName);

      
        const SearchParams = new URLSearchParams(req.body);
        const postCreator = SearchParams.get('postCreator');
        const commenter = SearchParams.get('commenter');
        const postId = SearchParams.get('postId');
        const content = SearchParams.get('content');
        const timestamp = SearchParams.get('timestamp');

        console.log('Received data:', { postCreator, commenter, postId, content, timestamp });

        // Create a new notification document
        const notification = {
            "postCreator": postCreator,
            "commenter": commenter,
            "timestamp": timestamp,
            "content": content,
            "postId": new ObjectId(postId)
        };

        // Insert the notification into the database
        await db.collection('notifications').insertOne(notification);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}