import { ICategory } from 'app/shared/model/category.model';

export interface ITodo {
  id?: number;
  text?: string;
  completed?: boolean;
  category?: ICategory;
}

export class Todo implements ITodo {
  constructor(public id?: number, public text?: string, public completed?: boolean, public category?: ICategory) {
    this.completed = this.completed || false;
  }
}
