import { BlogPost } from './entities/blogpost.entity';
import { Repository } from 'typeorm';
export declare class BlogPostsService {
    private blogPostRepository;
    constructor(blogPostRepository: Repository<BlogPost>);
    getAllBlogPosts(): Promise<BlogPost[]>;
}
