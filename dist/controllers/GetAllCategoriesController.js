"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetAllCategoriesService_1 = require("../services/GetAllCategoriesService");
class GetAllCategoriesController {
    async handle(req, res) {
        const service = new GetAllCategoriesService_1.GetAllCategoriesService();
        const result = await service.execute();
        return res.status(200).json(result);
    }
}
exports.default = new GetAllCategoriesController;
