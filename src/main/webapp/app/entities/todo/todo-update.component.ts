import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ITodo, Todo } from 'app/shared/model/todo.model';
import { TodoService } from './todo.service';
import { ICategory } from 'app/shared/model/category.model';
import { CategoryService } from 'app/entities/category/category.service';

@Component({
  selector: 'jhi-todo-update',
  templateUrl: './todo-update.component.html',
})
export class TodoUpdateComponent implements OnInit {
  isSaving = false;
  categories: ICategory[] = [];

  editForm = this.fb.group({
    id: [],
    text: [],
    completed: [],
    categoryId: [],
  });

  constructor(
    protected todoService: TodoService,
    protected categoryService: CategoryService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ todo }) => {
      this.updateForm(todo);

      this.categoryService.query().subscribe((res: HttpResponse<ICategory[]>) => (this.categories = res.body || []));
    });
  }

  updateForm(todo: ITodo): void {
    this.editForm.patchValue({
      id: todo.id,
      text: todo.text,
      completed: todo.completed,
      categoryId: todo.categoryId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const todo = this.createFromForm();
    if (todo.id !== undefined) {
      this.subscribeToSaveResponse(this.todoService.update(todo));
    } else {
      this.subscribeToSaveResponse(this.todoService.create(todo));
    }
  }

  private createFromForm(): ITodo {
    return {
      ...new Todo(),
      id: this.editForm.get(['id'])!.value,
      text: this.editForm.get(['text'])!.value,
      completed: this.editForm.get(['completed'])!.value,
      categoryId: this.editForm.get(['categoryId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITodo>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: ICategory): any {
    return item.id;
  }
}
