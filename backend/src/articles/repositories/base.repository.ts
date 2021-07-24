export class BaseRepository {
  parseMany(result) {
    return {
      data: result.rows,
      count: result.rowCount
    };
  }

  parseManyToOne(result) {
    return {
      data: result.rows.pop(),
    };
  }
}
