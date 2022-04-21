const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// use midleware 
app.use(cors())
app.use(express.json());

// username: dbuser1
// password: O4bB4oaSv4snS7Fm



const uri = "mongodb+srv://dbuser1:O4bB4oaSv4snS7Fm@cluster0.mdofc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');
        const user = {name: 'islam', email: "islam@muslim.com"};
        const result = await userCollection.insertOne(user);
        console.log(`user inserted with id: ${result.insertedId}`)
    }
    finally{
        // await client.close();
    }
}

run().catch(console.dir)


app.get('/', (req,res)=>{
    res.send('running my node crud server');
})

app.listen(port, ()=>{
    console.log('server is running');
})