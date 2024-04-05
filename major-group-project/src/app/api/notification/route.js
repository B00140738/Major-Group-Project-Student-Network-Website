import { MongoClient } from 'mongodb';
import { NextResponse } from "next/server";
import cookie from 'cookie'; // Ensure you have 'cookie' installed or use an equivalent method

export async function GET(request) {
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'forums';

    try {
        await client.connect();
        const db = client.db(dbName);

        // Parse the request cookies
        const cookies = cookie.parse(request.headers.get('cookie') || '');
        const currentUsername = cookies.username; // Assuming 'username' is the cookie name
        console.log('Current username from cookie:', currentUsername); // This will log the username from the cookie

        // Ensure that a username is available
        if (!currentUsername) {
            throw new Error('Username not found in cookies');
        }

        const notificationsCollection = db.collection('notifications');
        // Find the document for the current user
        const userDoc = await notificationsCollection.findOne({ username: currentUsername });

        // If the userDoc exists, filter out the notifications created by the current user
        // If not, return an empty array
        const userNotifications = userDoc ? userDoc.notifications.filter(notification => notification.createdBy !== currentUsername) : [];

        // Now you have the notifications specific to the current user
        return NextResponse.json({ notifications: userNotifications }, { status: 200 });
    } catch (error) {
        console.error('Error fetching notifications:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        await client.close();
    }
}
