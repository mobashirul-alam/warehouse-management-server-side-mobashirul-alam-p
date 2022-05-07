const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jed60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();

        const equipmentCollection = client.db('fitnessProEquipment').collection('product');

        app.get('/products', async (req, res) => {
            const query = {};
            const cursor = equipmentCollection.find(query);
            const results = await cursor.toArray();
            res.send(results);
        })
    }
    finally {

    }
};

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('hello world! this is from warehouse management')
});

app.listen(port, () => {
    console.log('listening to port :', port)
})