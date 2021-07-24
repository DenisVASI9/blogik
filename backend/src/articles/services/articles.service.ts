import { Injectable } from "@nestjs/common";
import { ArticlesRepository } from "../repositories/article.repository";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class ArticlesService {
  constructor(private readonly articlesRepository: ArticlesRepository) {
  }

  async getArticlesPreview() {
    return this.articlesRepository.getAll();
  }

  async getArticle(filename: string) {
    return fs.readFileSync(path.resolve(process.env.FILE_STORE, filename), {
      encoding: "utf-8"
    });
  }

  async createArticle(article) {
    console.log(article);
  }
}
