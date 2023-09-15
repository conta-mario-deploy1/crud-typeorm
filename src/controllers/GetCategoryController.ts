import { Request, Response } from "express";
import { GetCategoryService } from "../services/GetCategoryService";

class GetAllCategoriesController {
     async handle(req: Request, res: Response) {
          const { id } = req.params;

          const service = new GetCategoryService();
          
          const result = await service.execute(id);

          return res.status(200).json(result);
     }
}

export default new GetAllCategoriesController;