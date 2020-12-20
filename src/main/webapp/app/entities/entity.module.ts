import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'todo',
        loadChildren: () => import('./todo/todo.module').then(m => m.TodoAppTodoModule),
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.TodoAppCategoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class TodoAppEntityModule {}
