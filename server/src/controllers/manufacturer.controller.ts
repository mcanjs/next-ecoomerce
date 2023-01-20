import { CreateManufacturerDto } from '@/dtos/manufacturer.dto';
import { Manufacturer } from '@/interfaces/manufacturer.interface';
import ManufacturerService from '@/services/manufacturer.service';
import { NextFunction, Request, Response } from 'express';

class ManufacturerController {
  public manufacturerService = new ManufacturerService();

  public getManufacturers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllManufacturers = await this.manufacturerService.findAllManufacturers(req);
      res.status(200).json({ data: findAllManufacturers, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getManufacturersByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categorySlug: string = req.params.slug;
      const findAllCategoryManufacturers: Manufacturer[] = await this.manufacturerService.findAllCategoryManufacturers(categorySlug, req);

      res.status(200).json({ data: findAllCategoryManufacturers, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createManufacturer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const manufacturerData: CreateManufacturerDto = req.body;
      const createManufacturerData: Manufacturer = await this.manufacturerService.createManufacturer(manufacturerData);

      res.status(200).json({ data: createManufacturerData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default ManufacturerController;
