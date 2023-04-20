import express from "express";
import { connectCloudDB, connectLocalDB } from './config/db.js' 

const app = express();

const PORT = 5000;

//connectCloudDB()
connectLocalDB()

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
