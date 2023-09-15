"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryFieldsValidations = void 0;
const categoryFieldsValidations = (req, res, next) => {
    const { name, description } = req.body;
    if (!name || !description)
        return res.status(400).json({ error: "Todos os cmpos são obrigatórios." });
    return next();
};
exports.categoryFieldsValidations = categoryFieldsValidations;
