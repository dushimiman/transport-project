import express from "express";

import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

 	
dotenv.config("./.env")
 	
const app = express();

 	

 	
app.use(bodyParser.json());

 	

 	
app.use("/", (req, res) => res.status(200).json({

 	
   message:"This is error"

 	
}));
const dbUrl=process.env.DATABASE_URL;

 	

 	
mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));
 	

 	
app.listen(3030, () => {

 	
 console.log(`Server is running on Port 3030`);

 	
});

 	

 	
export default app;