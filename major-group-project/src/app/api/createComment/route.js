export async function POST(req, res) {
    // Make a note we are on the api. This goes to the console.
    console.log("in the api page");
  
    // Get the values that were sent across to us.
    const { searchParams } = new URL(req.url);
    const poster = searchParams.get('poster');
    const content = searchParams.get('content');
    const timestamp = searchParams.get('timestamp');
  
    console.log(poster);
    console.log(content);
    console.log(timestamp);
  
    // =================================================
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'forums'; // database name
  
    try {
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('commentsandreply'); // collection name
      const findResult = await collection.insertOne({
        "poster": poster,
        "content": content,
        "timestamp": timestamp
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
  