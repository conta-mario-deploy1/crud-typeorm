"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const category_repository_1 = require("../repositories/category.repository");
class CreateCategoryService {
    async execute({ name, description }) {
        const repo = category_repository_1.categoryRepository;
        if (await repo.findOne({ where: { name } }))
            return new Error("Categoria já se encontra cadastrada");
        const category = repo.create({
            name,
            description
        });
        await repo.save(category);
        return category;
    }
}
exports.CreateCategoryService = CreateCategoryService;
