import { Router } from "express";
import { 
     CreateCategoryController, 
     GetAllCategoriesController, 
     DeleteCategoryController,
     UpdateCategoryController,
     GetCategoryController } from "../controllers/index";

import { categoryFieldsValidations } from"../middlewares/index";

const categoryRoutes = Router();

categoryRoutes.get("/categories", GetAllCategoriesController.handle);
categoryRoutes.post("/categories", categoryFieldsValidations, CreateCategoryController.handle);
categoryRoutes.get("/categories/:id", GetCategoryController.handle);
categoryRoutes.put("/categories/:id", categoryFieldsValidations, UpdateCategoryController.handle);
categoryRoutes.delete("/categories/:id", DeleteCategoryController.handle);


export default categoryRoutes;