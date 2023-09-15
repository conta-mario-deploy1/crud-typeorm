import { categoryRepository } from "../repositories/category.repository";

export class RemoveCategoryService {
     async execute(id: string): Promise<Error> {

          const repo = categoryRepository;

          const categoryExists = await repo.findOne({where: {id}});
          if(!categoryExists) return new Error("Categoria não existe");

          await repo.delete(id);
     }
}