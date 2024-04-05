import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from "next/server";

export async function PATCH(req, res) {
    // Extract the ID of the comment to be updated and the new content from the request's query parameters
    const { searchParams } = new URL(req.url);
    const commentId = searchParams.get('commentId'); // The unique ID of the comment to be edited
    const newContent = searchParams.get('content'); // The new content for the comment

    // Database connection details
    const url = 'mongodb://root:example@localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'forums';

    try {
        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db(dbName);
        const collection = db.collection('commentsandreply');

        // Use the updateOne method to update the content of the comment with the specified ID
        const updateResult = await collection.updateOne(
            { "_id": new ObjectId(commentId) }, // Filter to identify the document to update
            { $set: { "content": newContent } } // Update operation
        );

        // Check if the document was successfully updated
        if (updateResult.matchedCount === 0) {
            // No document matched the given ID
            return NextResponse.json({ message: "Comment not found" }, { status: 404 });
        }

        NextResponse.json({ message: "Comment updated successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}