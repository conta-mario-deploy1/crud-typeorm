"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const index_2 = require("../middlewares/index");
const videosRoutes = (0, express_1.Router)();
videosRoutes.get("/videos", index_1.GetAllVideosController.handle);
videosRoutes.post("/videos", index_2.videoFieldsValidation, index_1.CreateVideoController.handle);
exports.default = videosRoutes;
