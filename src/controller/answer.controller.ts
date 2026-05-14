import { AnswerRepo } from "../repo/answer.js";
import { db } from "../config/env.js";

const answerRepo = new AnswerRepo();

export const submitAnswer = async (req: any, res: any) => {
    const { question_id, choice_id } = req.body;

    const [rows]: any = await db.execute(
        "SELECT is_correct FROM choices WHERE id=?",
        [choice_id]
    );

    const score = rows[0]?.is_correct ? 1 : 0;

    const answerId = await answerRepo.saveAnswer(
        req.user.id,
        question_id,
        null,
        score
    );

    await db.execute(
        "INSERT INTO answer_choices (answer_id, choice_id) VALUES (?,?)",
        [answerId, choice_id]
    );

    res.json({ answerId, score });
};