const express = require('express')
const { uuid } = require('uuidv4');
const mongodb = require('mongodb')
var bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }))
const port = 3000


var mongoClient = mongodb.MongoClient;

var client = new mongoClient("mongodb://ell887-account:OQE2E3lLFjFTcmmrOjlxfY9cPFcHnxjsH49SptYFGHsKperfuOmVzOQv7NSV46MPB6KGqVofQ9QLACDbfw77HA%3D%3D@ell887-account.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@ell887-account@/productdatabase");
const db = client.db('productdatabase');


app.post('/', (req, res) => {
  product_name = req.body.product
  obj = { "product": product_name }
  db.collection("products").insertOne(obj, function (err, res) {
    if (err) throw err;
  });
  res.sendFile(__dirname + "/index.html")
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/v1/products', async (req, res) => {
  result = await db.collection("products").find({}).toArray()
  product_list = []
  for (let i = 0; i < result.length; i++) {
    product_list.push(result[i].product)
  }
  res.render(__dirname + "/product.html",{products: product_list});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})