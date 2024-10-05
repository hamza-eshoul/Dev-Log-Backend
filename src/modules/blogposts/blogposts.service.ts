import { Injectable } from '@nestjs/common';
import { BlogPost } from './entities/blogpost.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BlogPostsService {
  constructor(
    @InjectRepository(BlogPost)
    private blogPostRepository: Repository<BlogPost>,
  ) {}

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await this.blogPostRepository.find();
  }
}
