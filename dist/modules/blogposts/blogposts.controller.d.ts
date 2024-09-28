import { BlogPostsService } from './blogposts.service';
export declare class BlogPostsController {
    private blogPostsService;
    constructor(blogPostsService: BlogPostsService);
    getAllPosts(): Promise<string[]>;
}
