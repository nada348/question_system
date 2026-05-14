import { ExamRepo } from "../repo/exam.js";

const examRepo = new ExamRepo();

export const createExam = async (req: any, res: any) => {
    const { title } = req.body;

    const examId = await examRepo.createExam(title, req.user.id);

    res.json({ examId });
};

export const getExams = async (_: any, res: any) => {
    const exams = await examRepo.getExams();
    res.json(exams);
};