import { NextFunction, Request, Response } from 'express';

class SearchController {
  public async findRelatedInformationsByKey(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default SearchController;
