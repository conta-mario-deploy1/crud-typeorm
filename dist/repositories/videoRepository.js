"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRepository = void 0;
const data_source_1 = require("../config/data-source");
const Video_entity_1 = require("../entities/Video.entity");
exports.videoRepository = data_source_1.AppDataSource.getRepository(Video_entity_1.Video);
