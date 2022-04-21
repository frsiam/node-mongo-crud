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

client.connect(err => {
  const collection = client.db("foodExpress").collection("users");
  console.log('db connected')
  // perform actions on the collection object
  client.close();
});


app.get('/', (req,res)=>{
    res.send('running my node crud server');
})

app.listen(port, ()=>{
    console.log('server is running');
})