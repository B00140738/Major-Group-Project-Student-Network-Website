export async function POST(req, res) {
  // Make a note we are on the api. This goes to the console.
  console.log("in the api page");

  // Get the values that were sent across to us.

  const { searchParams } = new URL(req.url);
  const poster = searchParams.get('poster');
  const title = searchParams.get('title');
  const content = searchParams.get('content');
  const timestamp = searchParams.get('timestamp');

  console.log(poster);
  console.log(title);
  console.log(content);
  console.log(timestamp);

  // =================================================
  // Connect to MongoDB and insert a document
  const { MongoClient } = require('mongodb');
  // Connection URL
  const url = 'mongodb://root:example@localhost:27017/';
  // Create a new MongoClient
  const client = new MongoClient(url);
  // database name
  const dbName = 'forums'; 

  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    // mongodb connection to the database
    const db = client.db(dbName);
    // Get the collection
    const collection = db.collection('forumpost'); // collection name
    // Insert a document
    const findResult = await collection.insertOne({
      "poster": poster,
      "title": title,
      "content": content,
      "timestamp": timestamp
    });

    

// Update notification status for users
const users = await db.collection('register').find({}).toArray();
users.forEach(async user => {
  await db.collection('notifications').updateOne(
    { username: user.username },
    { $inc: { count: 1 } }, // Increment notification count
    { upsert: true }
  );
});


    let valid = true;
    
    // at the end of the process we need to send something back.
    return res.json({ "data": "" + valid + "" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.close(); // Close the MongoDB client connection
  }
}
