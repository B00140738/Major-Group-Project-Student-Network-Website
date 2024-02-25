import { MongoClient } from 'mongodb';

export async function PUT(req, res) {
  const { searchParams } = new URL(req.url);
  const newUsername = searchParams.get('newUsername');
  const currentUsername = req.cookies.username;

  console.log('Updating username:', currentUsername, 'to', newUsername);

  const url = 'mongodb://root:example@localhost:27017/';
  const dbName = 'register';

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('register');

    const user = await collection.findOne({ username: currentUsername });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const result = await collection.updateOne(
      { _id: user._id },
      { $set: { username: newUsername } }
    );

    if (!result.modifiedCount) {
      return res.status(404).json({ message: 'Username not updated' });
    }

    res.status(200).json({ message: 'Username updated successfully' });
  } catch (error) {
    console.error('Error updating username:', error);
    res.status(500).json({ message: 'Failed to update username' });
  } finally {
    await client.close();
  }
}


