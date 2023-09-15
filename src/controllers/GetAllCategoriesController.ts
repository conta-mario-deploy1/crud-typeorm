import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

class GetAllCategoriesController {
     async handle(req: Request, res: Response) {
          
          const service = new GetAllCategoriesService();
          const result = await service.execute();

          return res.status(200).json(result);
     }
}

export default new GetAllCategoriesController;