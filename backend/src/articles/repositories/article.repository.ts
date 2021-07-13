import { Injectable } from '@nestjs/common';
import { PgService } from '../services/pg.service';
import { getAll } from './articles.queries';
import { BaseRepository } from './base.repository';

@Injectable()
export class ArticlesRepository extends BaseRepository {
  constructor(private readonly pgService: PgService) {
    super();
  }

  async getAll() {
    const result = await this.pgService.pool.query(getAll);
    return this.parseMany(result);
  }
}
