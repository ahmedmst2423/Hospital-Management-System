import mongoose from "mongoose";
import {config} from "dotenv";

config();


const mongo_uri = process.env.MONGO_URI;
export const dbConnection = () => {
    mongoose.connect(mongo_uri, {
        dbName: "Life_Care_Hospital"
    }).then(() => {
        console.log("Connected to Database");
    }).catch(err => {
        console.log(`Some error occured while connecting to Database: ${err}`);
    })
}