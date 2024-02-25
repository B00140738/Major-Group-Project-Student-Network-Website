export async function GET(req, res) {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const dbName = 'forums'; 
  
    try {
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connected successfully to server');
  
        const db = client.db(dbName);
        const users = await db.collection('register').find({}).toArray();
  
        users.forEach(async user => {
            await db.collection('notifications').updateOne(
                { username: user.username },
                { $inc: { count: 1 } },
                { upsert: true }
            );
        });
  
        console.log('Notification status updated for all users.');
  
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating notification status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } 
}
