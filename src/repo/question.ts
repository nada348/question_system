import { db } from "../config/env.js";

export class QuestionRepo {

    async addQuestion(data: any) {
        const [result]: any = await db.execute(
            `INSERT INTO questions 
            (exam_id, question_text, type, score, time_limit, order_index)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                data.exam_id,
                data.question_text,
                data.type,
                data.score,
                data.time_limit,
                data.order_index
            ]
        );
        return result.insertId;
    }

    async getQuestionsByExam(exam_id: number) {
        const [rows] = await db.execute(
            "SELECT * FROM questions WHERE exam_id = ? ORDER BY order_index",
            [exam_id]
        );
        return rows;
    }
}