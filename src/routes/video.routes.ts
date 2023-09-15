import { Router } from "express";
import { CreateVideoController, GetAllVideosController } from "../controllers/index";

import { videoFieldsValidation } from"../middlewares/index";

const videosRoutes = Router();

videosRoutes.get("/videos", GetAllVideosController.handle);
videosRoutes.post("/videos", videoFieldsValidation, CreateVideoController.handle);


export default videosRoutes;