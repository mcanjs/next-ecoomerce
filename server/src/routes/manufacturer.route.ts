import ManufacturerController from '@/controllers/manufacturer.controller';
import { CreateManufacturerDto } from '@/dtos/manufacturer.dto';
import { Routes } from '@/interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class ManufacturerRoute implements Routes {
  public path = '/api/manufacturers';
  public router = Router();
  public manufacturerController = new ManufacturerController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.manufacturerController.getManufacturers);
    this.router.get(`${this.path}/category/:slug`, this.manufacturerController.getManufacturersByCategory);
    this.router.post(`/secure${this.path}`, validationMiddleware(CreateManufacturerDto, 'body'), this.manufacturerController.createManufacturer);
  }
}

export default ManufacturerRoute;
