import { Request, Response } from "express";
import { RemoveCategoryService } from "../services/RemoveCategoryService";


class DeleteCategoryController {
     async handle(req: Request, res: Response) {

          const { id } = req.params;

          const service = new RemoveCategoryService();
          
          const result = await service.execute(id);

          if(result instanceof Error) return res.status(404).json({error: result.message});

          return res.status(204).header("X-Deleted", "true").send().end();
     }
}

export default new DeleteCategoryController;


