import { Module } from '@nestjs/common';
import { BlogPostsController } from './blogposts.controller';
import { BlogPostsService } from './blogposts.service';

@Module({
  controllers: [BlogPostsController],
  providers: [BlogPostsService],
})
export class BlogPostsModule {}
