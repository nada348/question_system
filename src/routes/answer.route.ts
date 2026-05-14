import express from "express";
import { submitAnswer } from "../controller/answer.controller.js";
import { authMiddleware } from "../middleware/Authmiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, submitAnswer);

export default router;