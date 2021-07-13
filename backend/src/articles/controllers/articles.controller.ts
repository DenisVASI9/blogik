import { Body, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { Controller, Get, Param, Post } from "@nestjs/common";
import { ArticlesService } from "../services/articles.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "../lib/multer";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {
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
  @UseInterceptors(FileInterceptor("article", multerOptions))
  createArticle(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body) {
    console.log(body, files);
  }
}
