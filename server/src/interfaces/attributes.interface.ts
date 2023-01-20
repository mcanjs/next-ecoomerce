export interface Attribute {
  _id: string;
  type: string;
  title: string;
  choices: string[];
  reqiured: boolean;
  createdAt: Date;
  updatedAt: Date;
}
