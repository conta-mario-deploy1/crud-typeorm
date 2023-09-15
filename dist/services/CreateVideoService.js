"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVideoService = void 0;
const videoRepository_1 = require("../repositories/videoRepository");
const category_repository_1 = require("../repositories/category.repository");
class CreateVideoService {
    async execute({ name, description, duration, category_id }) {
        const repo = videoRepository_1.videoRepository;
        const repoCategory = category_repository_1.categoryRepository;
        const category = await repoCategory.findOne({ where: { id: category_id } });
        if (!category)
            return new Error("Categoria não existe.");
        const videoExists = await repo.findOne({ where: { name } });
        if (videoExists)
            return new Error("Video já cadastrado.");
        const video = repo.create({ name, description, duration, category_id });
        await repo.save(video);
        return video;
    }
}
exports.CreateVideoService = CreateVideoService;
