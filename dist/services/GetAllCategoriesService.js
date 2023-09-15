"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoriesService = void 0;
const category_repository_1 = require("../repositories/category.repository");
class GetAllCategoriesService {
    async execute() {
        const repo = category_repository_1.categoryRepository;
        return repo.find();
    }
}
exports.GetAllCategoriesService = GetAllCategoriesService;
