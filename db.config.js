module.exports = () => {
  const mongoose = require("mongoose");
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;
  const cluster1 = process.env.DB_CLUSTER;
  const cluster2 = process.env.DB_CLUSTER2;
  const dbname = process.env.DB_NAME;

  //const mongoDB = `mongodb+srv://${user}:${pass}@cluster0.bvvf9ct.mongodb.net/?retryWrites=true&w=majority`;
  const mongoDB = `mongodb+srv://${user}:${pass}@${cluster1}.${cluster2}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  console.log("Connected to DB\n******************");
};
