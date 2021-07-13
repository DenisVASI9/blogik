import { Module } from "@nestjs/common";
import { PgService } from "./services/pg.service";
import { ArticlesController } from "./controllers/articles.controller";
import { ArticlesService } from "./services/articles.service";
import { ArticlesRepository } from "./repositories/article.repository";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Module({
  imports: [
    MulterModule.register({
      dest: process.env.FILE_STORE,
      storage: diskStorage({
        destination: process.env.FILE_STORE,
      })
    })
  ],
  controllers: [ArticlesController],
  providers: [PgService, ArticlesService, ArticlesRepository]
})
export class ArticlesModule {
}
