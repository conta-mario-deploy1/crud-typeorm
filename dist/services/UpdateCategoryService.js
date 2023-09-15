"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryService = void 0;
const category_repository_1 = require("../repositories/category.repository");
class UpdateCategoryService {
    async execute({ id, name, description }) {
        const repo = category_repository_1.categoryRepository;
        const category = await repo.findOne({ where: { id } });
        if (!category)
            return new Error("Categoria não existe");
        category.name = name;
        category.description = description;
        await repo.save(category);
        return category;
    }
}
exports.UpdateCategoryService = UpdateCategoryService;
