// Assuming this is in a file located at app/api/notifications/route.js (Next.js 13.x new folder structure)
import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from "next/server";

export async function GET(req) {
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'forums';
    const searchParams = new URL(req.url).searchParams;
    const username = searchParams.get('username'); // Assuming username is unique

    try {
        await client.connect();
        const db = client.db(dbName);
        const notification = await db.collection('notifications').findOne({ username });

        return NextResponse.json({ count: notification ? notification.count : 0 });
    } catch (error) {
        console.error('Error fetching notification count:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        await client.close();
    }
}
