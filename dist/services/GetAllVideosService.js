"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVideosService = void 0;
const videoRepository_1 = require("../repositories/videoRepository");
class GetAllVideosService {
    async execute() {
        const repo = videoRepository_1.videoRepository;
        return repo.find({
            relations: ["category"]
        });
    }
}
exports.GetAllVideosService = GetAllVideosService;
