import { CreateAttributeDto } from '@/dtos/attribute.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Attribute } from '@/interfaces/attributes.interface';
import attributeModel from '@/models/attribute.model';
import Pagination from '@/utils/pagination';
import { isEmpty } from '@/utils/util';
import { Request } from 'express';

class AttributeService {
  public attributes = attributeModel;

  public async findAllAttribute(req: Request): Promise<Attribute[]> {
    const attributes: Attribute[] = await this.attributes.find({}, '-__v', new Pagination(req.query));
    return attributes;
  }

  public async findAttributeById(attributeId: string): Promise<Attribute> {
    if (isEmpty(attributeId)) throw new HttpException(400, 'attributeId is empty');

    const attributeById: Attribute = await this.attributes.findById(attributeId);
    return attributeById;
  }

  public async createAttribute(attributeData: CreateAttributeDto): Promise<Attribute> {
    if (isEmpty(attributeData)) throw new HttpException(400, 'attributeData is empty');

    const createAttributeData: Attribute = await this.attributes.create(attributeData);
    return createAttributeData;
  }

  public async updateAttribute(attributeId: string, attributeData: CreateAttributeDto): Promise<Attribute> {
    if (isEmpty(attributeData)) throw new HttpException(400, 'attributeData is empty');

    const createAttributeData: Attribute = await this.attributes.findByIdAndUpdate(attributeId, { attributeData });
    if (!createAttributeData) throw new HttpException(409, "Attribute doesn't exist");
    return createAttributeData;
  }

  public async deleteAttribute(attributeId: string): Promise<Attribute> {
    if (isEmpty(attributeId)) throw new HttpException(400, 'attributeId is empty');

    const deleteAttributeById: Attribute = await this.attributes.findByIdAndDelete(attributeId);
    if (!deleteAttributeById) throw new HttpException(409, "Attribute doesn't exist");

    return deleteAttributeById;
  }
}

export default AttributeService;
