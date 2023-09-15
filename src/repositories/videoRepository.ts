import { AppDataSource } from "../config/data-source";
import { Video } from "../entities/Video";


export const videoRepository = AppDataSource.getRepository(Video);