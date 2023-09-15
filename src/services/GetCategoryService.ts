import { categoryRepository } from "../repositories/category.repository";


export class GetCategoryService {
     async execute(id: string) {
          const repo = categoryRepository;
          return repo.findBy({id});
     }
}