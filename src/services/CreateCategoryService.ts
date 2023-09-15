import { Category } from "../entities/Category";
import { categoryRepository } from "../repositories/category.repository";

interface CategoryRequest {
     name: string;
     description: string;
}

export class CreateCategoryService {
     
     async execute({ name, description }: CategoryRequest): Promise<Category | Error>{
          
          const repo = categoryRepository;

          if(await repo.findOne({where: {name}})) return new Error("Categoria já se encontra cadastrada");

          const category = repo.create({
               name,
               description
          });
          
          await repo.save(category);

          return category;
     }
}