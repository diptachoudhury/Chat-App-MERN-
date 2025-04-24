import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"


import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json()); //MiddleWare to extract json data out of BODy
app.use(cookieParser()); // allows to parse the cookie

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("server is running on PORT: " + PORT);
    connectDB();

})