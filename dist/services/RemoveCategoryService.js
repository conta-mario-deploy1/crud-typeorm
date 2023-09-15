"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCategoryService = void 0;
const category_repository_1 = require("../repositories/category.repository");
class RemoveCategoryService {
    async execute(id) {
        const repo = category_repository_1.categoryRepository;
        const categoryExists = await repo.findOne({ where: { id } });
        if (!categoryExists)
            return new Error("Categoria não existe");
        await repo.delete(id);
    }
}
exports.RemoveCategoryService = RemoveCategoryService;
