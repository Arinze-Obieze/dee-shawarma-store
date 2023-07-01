import { data } from "autoprefixer";
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
    if (req.method == "GET") {
        const db = await Mongodbconnect(); // Connect to MongoDB and get the database instance
        let shawarmas = [];
        const database = db.collection('shawarma')
        const cursor = database.find()
            .sort({ name: 1 })
        await cursor.forEach(shawarma => { shawarmas.push(shawarma) })
            .then(() => {
                res.status(200).json(shawarmas)
                console.log(shawarmas)
            })
            .catch(() => {
                res.status(500).json({ error: 'Couldnt Fetch the documents' })
            })
    }
    if (req.method == "POST") {
        try {
            const db = await Mongodbconnect(); // Connect to MongoDB and get the database instance
            const shawarmaInput = req.body;

            const result = await db.collection('shawarma').insertOne(shawarmaInput);
            res.status(201).json(result);
        } catch (error) {
            console.log("Error", error);
            res.status(500).json({ err: 'Could not create a new document', error: error });
        }
        console.log(req.body);
    }

}
