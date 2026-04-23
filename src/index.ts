import express from 'express';
import { PORT } from './config/env.js';
 import { db } from "./config/env.js"
const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/db-test", async (req, res) => {
    try {
        await db.query("SELECT 1");
        res.send("DB Connected ✅");
    } catch {
        res.send("DB Failed ❌");
    }
});
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});


