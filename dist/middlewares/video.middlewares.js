"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoFieldsValidation = void 0;
const videoFieldsValidation = (req, res, next) => {
    const { name, description, duration, category_id } = req.body;
    if (!name || !description || !duration || !category_id)
        return res.status(400).json({ error: "Todos os cmpos são obrigatórios." });
    return next();
};
exports.videoFieldsValidation = videoFieldsValidation;
