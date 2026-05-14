import { db } from "../config/env.js";

export class AnswerRepo {
    async saveAnswer(student_id: number, question_id: number, answer_text: any, score: number) {
        const [result]: any = await db.execute(
            `INSERT INTO answers (student_id, question_id, answer_text, score)
             VALUES (?,?,?,?)`,
            [student_id, question_id, answer_text, score]
        );
        return result.insertId;
    }
}