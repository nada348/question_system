import { db } from "../config/env.js";

export class ExamRepo {

    async createExam(title: string, created_by: number) {
        const [result]: any = await db.execute(
            "INSERT INTO exams (title, created_by) VALUES (?, ?)",
            [title, created_by]
        );
        return result.insertId;
    }

    async getExamById(id: number) {
        const [rows]: any = await db.execute(
            "SELECT * FROM exams WHERE id = ?",
            [id]
        );
        return rows[0];
    }

    async getExams() {
        const [rows] = await db.execute("SELECT * FROM exams");
        return rows;
    }
}