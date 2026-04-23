export type SessionStatus = "waiting" | "running" | "finished";

export interface ExamSession {
    id?: number;
    exam_id: number;
    current_question_id?: number;
    status?: SessionStatus;
    question_start_time?: Date;
}