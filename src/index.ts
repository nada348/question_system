// import express from 'express';
// import { PORT } from './config/env.js';
//  import { db } from "./config/env.js"
// const app = express();

// app.get("/", (req, res) => {
//     res.send("hello world");
// });
// app.get("/db-test", async (req, res) => {
//     try {
//         await db.query("SELECT 1");
//         res.send("DB Connected ✅");
//     } catch {
//         res.send("DB Failed ❌");
//     }
// });
// app.listen(PORT, () => {
//     console.log(`server running on ${PORT}`);
// });


import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import examRoutes from "./routes/exam.route.js";
import questionRoutes from "./routes/question.route.js";
import answerRoutes from "./routes/answer.route.js";
import path from "node:path";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/exams", examRoutes);
app.use("/questions", questionRoutes);
app.use("/answers", answerRoutes);
app.get("/", (req, res) => {
    res.render("index");
});
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "./views"));
app.listen(process.env.PORT, () => {
    console.log("http://localhost:3000");
});