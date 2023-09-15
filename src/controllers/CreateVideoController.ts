import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

class CreateVideoController {
     async handle(req: Request, res: Response) {

          const { name, description, duration, category_id } = req.body;

          const service = new CreateVideoService();

          const result = await service.execute({ 
               name, 
               description, 
               duration, 
               category_id 
          });

          if(result instanceof Error) return res.status(400).json({error: result.message});

          return res.status(201).json(result);

     }
}

export default new CreateVideoController;