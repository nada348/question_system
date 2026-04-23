import { db } from "../config/env.js";

export class SessionRepo {

    async createSession(exam_id: number) {
        const [result]: any = await db.execute(
            "INSERT INTO exam_sessions (exam_id) VALUES (?)",
            [exam_id]
        );
        return result.insertId;
    }

    async startSession(session_id: number, question_id: number) {
        await db.execute(
            `UPDATE exam_sessions 
             SET status='running', current_question_id=? 
             WHERE id=?`,
            [question_id, session_id]
        );
    }

    async finishSession(session_id: number) {
        await db.execute(
            `UPDATE exam_sessions SET status='finished' WHERE id=?`,
            [session_id]
        );
    }
}