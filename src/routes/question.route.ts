import express from "express";
import { addQuestion, getQuestions } from "../controller/question.controller.js";

const router = express.Router();

router.post("/", addQuestion);
router.get("/:examId", getQuestions);

export default router;