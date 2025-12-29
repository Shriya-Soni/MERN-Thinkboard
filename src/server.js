//const express = require("express"); //for commonjs
//for this, type:module
import dotenv from "dotenv";
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json()); //this middleware will parse the JSON bodies: req.body
//our simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);
// app.use("/api/products", productsRoutes);
// app.use("/api/posts", postsRoutes);

app.use(rateLimiter);


connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server started on PORT : ${PORT}`)
    });
}).catch((error) => {
    console.log("Failed to connect to database:", error);
    process.exit(1);
});