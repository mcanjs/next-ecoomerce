export interface IAttributeItem {
  _id: string;
  type: 'radio' | 'checkbox' | 'input' | 'textarea' | 'select';
  title: string;
  choices: string[];
  required: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IAttribute {
  data: IAttributeItem[];
  message: string;
}
