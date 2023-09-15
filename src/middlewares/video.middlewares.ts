import { Request, Response, NextFunction } from "express";


const videoFieldsValidation = (req: Request, res: Response, next: NextFunction)=>{
     const { name, description, duration, category_id } = req.body;

     if(!name || !description || !duration || !category_id) return res.status(400).json({ error: "Todos os cmpos são obrigatórios." });

     return next();
}


export {
     videoFieldsValidation
}