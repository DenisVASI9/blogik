import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticlesModule } from "./articles/articles.module";
import { ConfigModule } from "@nestjs/config";
import { config } from "../configuration";

@Module({
  imports: [ArticlesModule, ConfigModule.forRoot({
    isGlobal: true,
    load: [() => config]
  })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
