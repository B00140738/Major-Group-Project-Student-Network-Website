export async function PUT(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).end('Method Not Allowed');
  }

  const { username } = req; // Assuming username is available in the request object
  if (!username) {
    return res.status(403).json({ message: 'No permission to update image' });
  }

  const { image } = req.body;
  const url = 'mongodb://root:example@mongodb:27017/';
  const dbName = 'forums';
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('register'); 
    const updateResult = await usersCollection.updateOne(
      { username },
      { $set: { profileImage: image } }
    );

    if (updateResult.modifiedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Profile image updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.close();
  }
}