import { AppDataSource } from "../config/data-source";
import { Video } from "../entities/Video.entity";


export const videoRepository = AppDataSource.getRepository(Video);