export interface Answer {
    id?: number;
    student_id: number;
    question_id: number;
    answer_text?: string;
    score?: number;
    created_at?: Date;
}