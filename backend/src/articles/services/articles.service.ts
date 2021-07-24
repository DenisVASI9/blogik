import { Injectable, OnModuleInit } from "@nestjs/common";
import { ArticlesRepository } from "../repositories/article.repository";
import * as fs from "fs";
import * as path from "path";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ArticlesService implements OnModuleInit {
  constructor(private readonly articlesRepository: ArticlesRepository, private readonly configService: ConfigService) {
  }

  files = '/tmp'

  onModuleInit(): void {
    this.files = this.configService.get<string>('FILE_STORE')
  }

  async getArticlesPreview() {
    return this.articlesRepository.getAll();
  }

  async getArticle(filename: string) {
    return fs.readFileSync(path.resolve(this.files, filename), {
      encoding: "utf-8"
    });
  }

  async createArticle(article) {
    return this.articlesRepository.insertOne(article);
  }
}
