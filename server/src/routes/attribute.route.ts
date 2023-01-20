import AttributeController from '@/controllers/attribute.controller';
import { Router } from 'express';

class AttributeRoute {
  public path = '/api/attribute';
  public router = Router();
  public attributeController = new AttributeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.attributeController.getAttributes);
    this.router.get(`${this.path}/:id`, this.attributeController.getAttributeById);
    this.router.post(`/secure${this.path}`, this.attributeController.createAttribute);
    this.router.put(`/secure${this.path}/:id`, this.attributeController.updateAttribute);
    this.router.delete(`/secure${this.path}/:id`, this.attributeController.deleteAttribute);
  }
}

export default AttributeRoute;
