import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlogPostsModule } from './modules/blogposts/blogposts.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, BlogPostsModule],
})
export class AppModule {}
