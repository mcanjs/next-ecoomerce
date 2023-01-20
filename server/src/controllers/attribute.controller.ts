import { CreateAttributeDto } from '@/dtos/attribute.dto';
import { Attribute } from '@/interfaces/attributes.interface';
import AttributeService from '@/services/attribute.service';
import { NextFunction, Request, Response } from 'express';

class AttributeController {
  public attributeService = new AttributeService();

  public getAttributes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllAttributes: Attribute[] = await this.attributeService.findAllAttribute(req);
      res.status(200).json({ data: findAllAttributes, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getAttributeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const attributeId: string = req.params.id;
      const findAttributeById: Attribute = await this.attributeService.findAttributeById(attributeId);

      res.status(200).json({ data: findAttributeById, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createAttribute = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const attributeData: CreateAttributeDto = req.body;
      const createAttributeData: Attribute = await this.attributeService.createAttribute(attributeData);

      res.status(201).json({ data: createAttributeData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateAttribute = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const attributeId: string = req.params.id;
      const attributeData: CreateAttributeDto = req.body;
      const updateAttribute: Attribute = await this.attributeService.updateAttribute(attributeId, attributeData);

      res.status(200).json({ data: updateAttribute, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteAttribute = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const attributeId: string = req.params.id;
      const deleteAttributeData: Attribute = await this.attributeService.deleteAttribute(attributeId);

      res.status(200).json({ data: deleteAttributeData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default AttributeController;
