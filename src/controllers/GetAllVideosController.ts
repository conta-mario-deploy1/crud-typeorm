import { Request, Response } from "express";
import { GetAllVideosService } from "../services/index";

class GetAllCategoriesController {
     async handle(req: Request, res: Response) {
          
          const service = new GetAllVideosService();
          const result = await service.execute();

          return res.status(200).json(result);
     }
}

export default new GetAllCategoriesController;