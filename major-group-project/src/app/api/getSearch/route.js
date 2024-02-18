// src\app\api\getSearch\route.js
export async function GET(req, res) {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'forums';

    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('forumpost');

        // Extract search query from URL query parameters
        const searchQuery = req.params.searchParam || ''; // Change to req.params.searchParam

        // Modify the find query to filter results based on the search query
        const findResult = await collection.find({
            // Assuming 'title' is the field you want to search in
            "title": { $regex: searchQuery, $options: 'i' }
        }).toArray();

        console.log('Found documents =>', findResult);
        res.json(findResult); // Send the result back to the client
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}
