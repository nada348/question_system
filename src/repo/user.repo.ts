import { db } from "../config/env.js";

export class UserRepo {

    async createUser(name: string, role: string) {
        const [result]: any = await db.execute(
            "INSERT INTO users (name, role) VALUES (?, ?)",
            [name, role]
        );
        return result.insertId;
    }

    async getUserById(id: number) {
        const [rows]: any = await db.execute(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );
        return rows[0];
    }

    async getAllUsers() {
        const [rows] = await db.execute("SELECT * FROM users");
        return rows;
    }
}