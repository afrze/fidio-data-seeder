import mongoose from "mongoose";

const localDBConnectionString = "mongodb://0.0.0.0:27017";
const cloudDBconnectionString =
  "mongodb+srv://zubae:darkranger123@fidio-data-seed.y4vfr3t.mongodb.net/test";

/* This is for connecting local MongoDB instance */
export const connectLocalDB = async () => {
  try {
    const conn = await mongoose.connect(localDBConnectionString, {
      autoIndex: true,
    });

    console.log(
      `Local instance of MongoDB Database is connected: ${conn.connection.host}`
    );
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};

/* This is for connecting cloud MongoDB instance */
export const connectCloudDB = async () => {
  try {
    const conn = await mongoose.connect(cloudDBconnectionString, {
      autoIndex: true,
    });
    console.log(
      `Cloud instance of MongoDB Database is connected: ${conn.connection.host}`
    );
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};
