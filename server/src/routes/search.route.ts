import { Router } from 'express';

class SearchRoute {
  public path = '/api/search';
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:key`);
  }
}

export default SearchRoute;
