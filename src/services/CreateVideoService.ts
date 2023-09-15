import { Category } from '../entities/Category.entity';
import { Video } from '../entities/Video.entity';
import { videoRepository } from '../repositories/videoRepository';
import { categoryRepository } from '../repositories/category.repository';

interface VideoRequest {
     name: string;
     description: string;
     duration: number;
     category_id: string;
}

export class CreateVideoService {
     async execute({ name, description, duration, category_id }: VideoRequest): Promise<Error | Video> {
          const repo = videoRepository;
          const repoCategory = categoryRepository;

          const category = await repoCategory.findOne({where: {id: category_id}});

          if(!category) return new Error("Categoria não existe."); 

          const videoExists = await repo.findOne({where: {name}});
          
          if(videoExists) return new Error("Video já cadastrado.");

          const video = repo.create({ name, description, duration, category_id });

          await repo.save(video);

          return video;
     }
}
