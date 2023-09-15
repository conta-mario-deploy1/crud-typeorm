import { AppDataSource } from "../config/data-source";
import { Category } from "../entities/Category.entity";


export const categoryRepository = AppDataSource.getRepository(Category);
