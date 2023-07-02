import { createReadStream } from 'fs';
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

let URI = process.env.MONGO_URI;

async function Mongodbconnect() {
const client = new MongoClient(URI, {
serverApi: {
version: ServerApiVersion.v1,
strict: true,
deprecationErrors: true,
}
});
try {
await client.connect();
console.log('Connected to MongoDB');
return client.db(); // Return the database instance
} catch (error) {
console.log("Error", error);
throw error; // Throw the error to be caught by the caller
}
}

export default async function handler(req, res) {
if (req.method === "GET") {
const db = await Mongodbconnect(); // Connect to MongoDB and get the database instance
try {
const shawarmas = await db.collection('shawarma').find().sort({ text: 1 }).toArray();
res.status(200).json(shawarmas);
console.log(shawarmas);
} catch (error) {
res.status(500).json({ error: 'Could not fetch the documents' });
}
}

    if (req.method === "POST") {
        try {
            const db = await Mongodbconnect(); // Connect to MongoDB and get the database instance
            const { image, text, number } = req.body;

            // Insert the image, text, and number data into the MongoDB collection
            const result = await db.collection("shawarma").insertOne({
                image: image,
                text: text,
                number: number,
            });

            res.status(201).json(result);
        } catch (error) {
            console.log("Error", error);
            res.status(500).json({ err: "Could not create a new document", error: error });
        }
    }

}
