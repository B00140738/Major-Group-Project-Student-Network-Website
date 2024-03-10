// This is a hypothetical example and might need adjustments to fit into your application

import { MongoClient } from 'mongodb';
import { NextResponse } from "next/server";

const url = 'mongodb://root:example@localhost:27017/';
const dbName = 'forums';

export async function POST(request) {
    try {
        // Parse the incoming request to get the comment details
        const body = await request.json();
        const { username, postId, comment } = body;

        if (!username || !postId || !comment) {
            return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }
        // Connect to MongoDB
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);

        // Fetch the post to get the owner's username
        const post = await db.collection('posts').findOne({ _id: postId });
        if (!post) {
            return new NextResponse(JSON.stringify({ error: 'Post not found' }), { status: 404 });
        }
        const postOwnerUsername = post.username; // Assuming 'username' field contains the post owner's username

        // Insert or update the notification for the post owner
        const result = await db.collection('notifications').updateOne(
            { username: postOwnerUsername },
            { 
                $push: { notifications: { action: 'new_comment', postId, read: false, timestamp: new Date() } },
                $inc: { count: 1 }
            },
            { upsert: true }
        );

        await client.close();

        return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error handling comment post:', error);
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
