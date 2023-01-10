import mongoose from "mongoose";

mongoose.connect('mongodb+srv://levileal:levi2020@cluster0.yvt6spj.mongodb.net/node-express');

let db = mongoose.connection;

export default db;