export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');
    const pass = searchParams.get('pass');

    const { MongoClient } = require('mongodb');
    const url = 'mongodb+srv://betsunaidzeb:Ux3Fw4nykUyctoyY@cluster0.mtuixbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(url);
    const dbName = 'forums';

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('register');

    // Find user by username
    const findResult = await collection.findOne({ "username": username });

    let valid = false;
    const bcrypt = require('bcrypt');
    if (findResult) { // Check if user was found
      let hashResult = bcrypt.compareSync(pass, findResult.pass); // Compare password
      if (hashResult) {
        valid = true;
        // Set cookies in response headers
        res.setHeader('Set-Cookie', [
          `auth=true; HttpOnly; Path=/`,
          `username=${username}; HttpOnly; Path=/`,
          `userId=${findResult._id.toString()}; HttpOnly; Path=/`
        ]);
      }
    }

    return res.json({ "data": "" + valid + "" });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
