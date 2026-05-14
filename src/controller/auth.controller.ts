// import {type Request,type Response } from "express";
// import jwt from "jsonwebtoken";

// export const login = (req: Request, res: Response) => {
//     const { name, role, id } = req.body;

//     const token = jwt.sign(
//         { id, name, role },
//         "secretkey"
//     );

//     res.json({ token });
// };