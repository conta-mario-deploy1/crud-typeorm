"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCategoryService_1 = require("../services/CreateCategoryService");
class CreateCategoryController {
    async handle(req, res) {
        const { name, description } = req.body;
        const service = new CreateCategoryService_1.CreateCategoryService();
        const result = await service.execute({ name, description });
        if (result instanceof Error)
            return res.status(400).json({ error: result.message });
        return res.status(201).json(result);
    }
}
exports.default = new CreateCategoryController;
