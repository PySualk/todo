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
      {
        path: 'app-user',
        loadChildren: () => import('./app-user/app-user.module').then(m => m.TodoAppAppUserModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class TodoAppEntityModule {}
