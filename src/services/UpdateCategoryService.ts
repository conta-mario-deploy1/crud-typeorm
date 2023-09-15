import { Category } from './../entities/Category';
import { categoryRepository } from "../repositories/category.repository";

interface CategoryRequest {
     id: string;
     name: string;
     description: string;
}

export class UpdateCategoryService {
     async execute({ id, name, description }: CategoryRequest): Promise<Category | Error> {

          const repo = categoryRepository;

          const category = await repo.findOne({where: {id}});
          
          if(!category) return new Error("Categoria não existe");

          category.name = name;
          category.description = description;
          
          await repo.save(category);

          return category;
     }
}