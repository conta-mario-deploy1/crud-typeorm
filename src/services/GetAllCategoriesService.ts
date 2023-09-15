import { categoryRepository } from "../repositories/category.repository";


export class GetAllCategoriesService {
     async execute() {
          const repo = categoryRepository;
          return repo.find();
     }
}