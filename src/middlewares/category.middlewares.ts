import { Request, Response, NextFunction } from "express";

const categoryFieldsValidations = (req: Request, res: Response, next: NextFunction)=> {

     const { name, description } = req. body;

     if(!name || !description) return res.status(400).json({error: "Todos os cmpos são obrigatórios."});

     return next();
}

export {
     categoryFieldsValidations
};