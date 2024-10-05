import { Module } from '@nestjs/common';
import { BlogPostsController } from './blogposts.controller';
import { BlogPostsService } from './blogposts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './entities/blogpost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost])],
  controllers: [BlogPostsController],
  providers: [BlogPostsService],
})
export class BlogPostsModule {}
