import { ITodo } from 'app/shared/model/todo.model';

export interface ICategory {
  id?: number;
  name?: string;
  todos?: ITodo[];
}

export class Category implements ICategory {
  constructor(public id?: number, public name?: string, public todos?: ITodo[]) {}
}
