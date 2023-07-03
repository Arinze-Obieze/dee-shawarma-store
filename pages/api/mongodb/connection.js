import { Buffer } from 'buffer';
import { MongoClient, ObjectId, ServerApiVersion, Binary } from 'mongodb';
import stream from 'stream';
import { promisify } from 'util';
import { createReadStream } from 'fs';

let URI = process.env.MONGO_URI;

async function Mongodbconnect() {
    const client = new MongoClient(URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return { client, db: client.db() }; // Return the client and database instance
    } catch (error) {
        console.log('Error', error);
        throw error; // Throw the error to be caught by the caller
    }
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { client, db } = await Mongodbconnect(); // Connect to MongoDB and get the client and database instance
        try {
            const shawarmas = await db.collection('shawarma').find().sort({ text: 1 }).toArray();
            res.status(200).json(shawarmas);
          /**  console.log(shawarmas); */
        } catch (error) {
            res.status(500).json({ error: 'Could not fetch the documents' });
        } finally {
            client.close(); // Close the MongoDB client
        }
    }

    // ...

    if (req.method === 'POST') {
        const { client, db } = await Mongodbconnect();
        try {
            const { image, text, number } = req.body;

            const result = await db.collection('shawarma').insertOne({
                image: image,
                text: text,
                number: number,
            });
            //console.log(req.body)
            res.status(201).json(result);
        } catch (error) {
            console.log('Error', error);
            res.status(500).json({ err: 'Could not create a new document', error: error });
        } finally {
            client.close();
        }
    }




    // ...

    if (req.method === 'DELETE') {
        const { client, db } = await Mongodbconnect();
        try {
            const { text } = req.query; 

            const result = await db.collection('shawarma').deleteOne({ text: text });
            if (result.deletedCount === 0) {
                res.status(404).json({ error: 'Document not found' });
            } else {
                res.status(200).json({ message: 'Document deleted successfully' });
            }
        } catch (error) {
            console.log('Error', error);
            res.status(500).json({ error: 'Could not delete the document' });
        } finally {
            client.close();
        }
    }

    // ...



}

