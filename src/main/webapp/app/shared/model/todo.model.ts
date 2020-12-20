export interface ITodo {
  id?: number;
  text?: string;
  completed?: boolean;
  categoryId?: number;
}

export class Todo implements ITodo {
  constructor(public id?: number, public text?: string, public completed?: boolean, public categoryId?: number) {
    this.completed = this.completed || false;
  }
}
