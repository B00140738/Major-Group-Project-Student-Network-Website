// route.js
import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from 'mongodb';

const url = 'mongodb://root:example@localhost:27017/';
const dbName = 'forums';
const client = new MongoClient(url);

export async function GET(request) {
    try {
        const searchParams = new URL(request.url).searchParams;
        const moduleId = searchParams.get('moduleId');

        if (!moduleId) {
            return NextResponse.json({ error: 'Module ID is required' }, { status: 400 });
        }

        await client.connect();
        const db = client.db(dbName);
        const modulesCollection = db.collection('modules');

        // Fetch the module title, description, and other details from the 'modules' collection
        const module = await modulesCollection.findOne({ _id: new ObjectId(moduleId) });
        if (!module) {
            return NextResponse.json({ error: 'Module not found' }, { status: 404 });
        }

        console.log('Module:', module);

        // Find related modules based on the current module's ID from the 'modules' collection
        const relatedModules = await modulesCollection.find({ _id: { $ne: new ObjectId(moduleId) } }).toArray();
        console.log('Related modules:', relatedModules);

        // Return module details including title and description, and related modules
        return NextResponse.json({ 
            module,
            relatedModules,
        }, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch module:', error);
        return NextResponse.json({ error: 'Failed to fetch module' }, { status: 500 });
    } finally {
        await client.close();
    }
}
