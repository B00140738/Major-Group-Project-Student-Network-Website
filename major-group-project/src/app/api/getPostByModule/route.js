// getPostsByModule.js
export async function GET(req, res) {
    const { MongoClient, ObjectId } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'forums';
    
    if (req.method === 'GET') {
        try {
            const { moduleId } = req.query;
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection('forumposts');
            const posts = await collection.find({ module_id: ObjectId(moduleId) }).toArray();
            res.status(200).json(posts);
        } catch (error) {
            console.error('Error fetching posts by module:', error);
            res.status(500).json({ message: 'Internal server error' });
        } finally {
            await client.close();
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}