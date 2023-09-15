"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateCategoryService_1 = require("../services/UpdateCategoryService");
class UpdateCategoryController {
    async handle(req, res) {
        const { id } = req.params;
        const { name, description } = req.body;
        const service = new UpdateCategoryService_1.UpdateCategoryService();
        const result = await service.execute({ id, name, description });
        if (result instanceof Error)
            return res.status(404).json({ error: result.message });
        return res.status(200).json(result);
    }
}
exports.default = new UpdateCategoryController;
