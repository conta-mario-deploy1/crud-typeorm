"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RemoveCategoryService_1 = require("../services/RemoveCategoryService");
class DeleteCategoryController {
    async handle(req, res) {
        const { id } = req.params;
        const service = new RemoveCategoryService_1.RemoveCategoryService();
        const result = await service.execute(id);
        if (result instanceof Error)
            return res.status(404).json({ error: result.message });
        return res.status(204).header("X-Deleted", "true").send().end();
    }
}
exports.default = new DeleteCategoryController;
