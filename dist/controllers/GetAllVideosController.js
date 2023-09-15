"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../services/index");
class GetAllCategoriesController {
    async handle(req, res) {
        const service = new index_1.GetAllVideosService();
        const result = await service.execute();
        return res.status(200).json(result);
    }
}
exports.default = new GetAllCategoriesController;
