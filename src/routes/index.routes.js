"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRoutes = exports.categoryRoutes = void 0;
const category_routes_1 = __importDefault(require("./category.routes"));
exports.categoryRoutes = category_routes_1.default;
const video_routes_1 = __importDefault(require("./video.routes"));
exports.videosRoutes = video_routes_1.default;
