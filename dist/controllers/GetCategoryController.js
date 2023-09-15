"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetCategoryService_1 = require("../services/GetCategoryService");
class GetAllCategoriesController {
    async handle(req, res) {
        const { id } = req.params;
        const service = new GetCategoryService_1.GetCategoryService();
        const result = await service.execute(id);
        return res.status(200).json(result);
    }
}
exports.default = new GetAllCategoriesController;
