// //

const { MongoClient } = require('mongodb');
const assert = require("assert")
// Connection URL
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

// Database Name
const dbName = 'fruitsDB1';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('fruits');

    // the following code examples can be pasted here...
    // insert Method
    const insertResult = await collection.insertMany([
        { "name": "Apple", "score": 8, "review": "Great fruit" },
        { "name": "Orange", "score": 6, "review": "Kinda sour" },
        { "name": "Banana", "score": 9, "review": "Great stuff" }
    ]);
    console.log('Inserted documents =>', insertResult);

    // Find method 
    const findResult = await collection.find({}).toArray()
    console.log("Found documents =>", findResult)

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());