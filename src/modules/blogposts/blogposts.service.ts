import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogPostsService {
  findAll() {
    return ['Post 1', 'Post 2', 'Post 3'];
  }
}
