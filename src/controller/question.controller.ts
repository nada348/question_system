import { QuestionRepo } from "../repo/question.js";

const questionRepo = new QuestionRepo();

export const addQuestion = async (req: any, res: any) => {
    const id = await questionRepo.addQuestion(req.body);
    res.json({ id });
};

export const getQuestions = async (req: any, res: any) => {
    const data = await questionRepo.getQuestionsByExam(req.params.examId);
    res.json(data);
};