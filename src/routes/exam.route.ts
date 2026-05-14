import express from "express";
import { createExam, getExams } from "../controller/exam.js";
import { authMiddleware } from "../middleware/Authmiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createExam);
router.get("/", getExams);

export default router;