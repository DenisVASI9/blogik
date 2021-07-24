import { Body, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Controller, Get, Param, Post } from "@nestjs/common";
import { ArticlesService } from "../services/articles.service";
import { FileInterceptor } from "@nestjs/platform-express";

import { ConfigService } from "@nestjs/config";
import { multerOptions } from "../lib/multer";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService, private readonly configService: ConfigService) {
  }

  @Get()
  getArticles() {
    return this.articlesService.getArticlesPreview();
  }

  @Get(":filename")
  getArticleByFilename(@Param("filename") filename) {
    return this.articlesService.getArticle(filename);
  }

  @Post("create")
  @UseInterceptors(
    FileInterceptor("article", multerOptions)
  )
  createArticle(@UploadedFile() file, @Body() body) {
    return this.articlesService.createArticle({ ...body, article: file.filename });
  }
}
