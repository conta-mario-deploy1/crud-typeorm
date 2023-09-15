"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryService = void 0;
const category_repository_1 = require("../repositories/category.repository");
class GetCategoryService {
    async execute(id) {
        const repo = category_repository_1.categoryRepository;
        return repo.findBy({ id });
    }
}
exports.GetCategoryService = GetCategoryService;
