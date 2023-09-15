import { videoRepository } from "../repositories/videoRepository";


export class GetAllVideosService {
     async execute() {
          const repo = videoRepository;
          return repo.find({
               relations: ["category"]
          });
     }
}