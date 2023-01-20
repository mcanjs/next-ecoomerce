type Query = {
  skip?: string;
  limit?: string;
};

export default class Pagination {
  public skip: number | undefined;
  public limit: number | undefined;
  public defaults = {
    skip: 0,
    limit: 5,
  };
  constructor(query: Query) {
    this.limit = query.limit ? parseInt(query.limit) : undefined;
    this.skip = query.skip && query.limit ? parseInt(query.skip) * parseInt(query.limit) : this.defaults.skip * this.defaults.limit;
  }
}
