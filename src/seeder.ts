import mongoose from "mongoose";
import breakdownAnalysis from "./data/breakdownAnalysis.js";
import { connectCloudDB, connectLocalDB } from "./config/db.js";
import BreakdownAnalysis from "./models/breakdown-analysis";

//connectCloudDB()
connectLocalDB();

const importData = async () => {
  try {
    await BreakdownAnalysis.deleteMany();

    await BreakdownAnalysis.insertMany(breakdownAnalysis);

    console.log("Data Successfull Imported");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await BreakdownAnalysis.deleteMany();
    console.log("Data Successfull Destroyed");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
