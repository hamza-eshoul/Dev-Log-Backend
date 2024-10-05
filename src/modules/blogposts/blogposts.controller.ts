import { Controller, Get, Post, Delete } from '@nestjs/common';
import { BlogPostsService } from './blogposts.service';

@Controller('posts')
export class BlogPostsController {
  constructor(private blogPostsService: BlogPostsService) {}
  @Get()
  async getAllPosts() {
    return this.blogPostsService.getAllBlogPosts();
  }
}
