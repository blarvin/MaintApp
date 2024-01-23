const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace the following with your actual connection URI and credentials
const uri = process.env.MONGODB_URI;

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event, context) => {
  try {
    // Connect to the MongoDB client
    await client.connect();

    const database = client.db('Locks_And_Bridges');
    const collection = database.collection('Brentford_Gauging_Locks');

    // Fetch data from the collection
    const data = await collection.find({}).toArray();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allows any origin to access the resource
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error connecting to MongoDB', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Failed to connect to MongoDB' })
    };
  } finally {
    // Close the connection to the MongoDB client
    await client.close();
  }
};

module.exports = { handler };
