import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(404).json();
    } catch (error) {
      next(error);
    }
  };

  public get = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        welcome: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
