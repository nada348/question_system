import jwt from "jsonwebtoken";

export const login = (req: any, res: any) => {
    const { name, role, id } = req.body;

    const token = jwt.sign(
        { id, name, role },
        "secretkey",
        { expiresIn: "1d" }
    );

    res.json({ token });
};