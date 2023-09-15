import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

class UpdateCategoryController {
     async handle(req: Request, res: Response) {
          
          const { id } = req.params;
          const { name, description } = req.body;

          const service = new UpdateCategoryService();

          const result = await service.execute({id, name, description});

          if(result instanceof Error) return res.status(404).json({error: result.message})

          return res.status(200).json(result);
     }
}

export default new UpdateCategoryController;