export class BaseRepository {
  async parseMany(result) {
    return {
      data: result.rows,
      count: result.rowCount,
    };
  }
}
