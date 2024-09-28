"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostsService = void 0;
const common_1 = require("@nestjs/common");
let BlogPostsService = class BlogPostsService {
    findAll() {
        return ['Post 1', 'Post 2', 'Post 3'];
    }
};
exports.BlogPostsService = BlogPostsService;
exports.BlogPostsService = BlogPostsService = __decorate([
    (0, common_1.Injectable)()
], BlogPostsService);
//# sourceMappingURL=blogposts.service.js.map