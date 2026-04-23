export type QuestionType =
    | "mcq"
    | "multi_mcq"
    | "matching"
    | "complete"
    | "text";

export interface Question {
    id?: number;
    exam_id: number;
    question_text: string;
    type: QuestionType;
    score: number;
    time_limit?: number;
    order_index?: number;
}