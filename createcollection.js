var client = new mongoClient("mongodb://ell887-account:OQE2E3lLFjFTcmmrOjlxfY9cPFcHnxjsH49SptYFGHsKperfuOmVzOQv7NSV46MPB6KGqVofQ9QLACDbfw77HA%3D%3D@ell887-account.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@ell887-account@/productdatabase");
const db = client.db('productdatabase');

db.createCollection("products", (err, res)=> {
  if (err) throw err;
  console.log("collection created")
});