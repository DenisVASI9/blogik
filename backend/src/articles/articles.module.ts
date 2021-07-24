import { Module } from "@nestjs/common";
import { PgService } from "./services/pg.service";
import { ArticlesController } from "./controllers/articles.controller";
import { ArticlesService } from "./services/articles.service";
import { ArticlesRepository } from "./repositories/article.repository";
import { MulterModule } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";
import { config } from "../../configuration";

@Module({
  imports: [
    MulterModule.register({
      dest: config.FILE_STORE
    })
  ],
  controllers: [ArticlesController],
  providers: [PgService, ConfigService, ArticlesService, ArticlesRepository]
})
export class ArticlesModule {
}
