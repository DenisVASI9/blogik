import { Injectable } from "@nestjs/common";
import { PgService } from "../services/pg.service";
import { BaseRepository } from "./base.repository";
import { sql } from "slonik";

@Injectable()
export class ArticlesRepository extends BaseRepository {
  constructor(private readonly pgService: PgService) {
    super();
  }

  async getAll() {
    const result = await this.pgService.pool.query(sql`SELECT *
                                                       FROM public.articles
                                                       ORDER BY id`);
    return this.parseMany(result);
  }

  async insertOne(article) {
    const result = await this.pgService.pool.query(sql`INSERT INTO articles (title, description, article)
                                                       VALUES (${article.title}, ${article.description}, ${article.article}) RETURNING *`);
    return this.parseManyToOne(result);
  }
}
