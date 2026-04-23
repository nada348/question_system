export interface User {
    id?: number;
    name: string;
    role: "student" | "examiner";
    created_at?: Date;
}