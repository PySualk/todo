import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ITodo } from 'app/shared/model/todo.model';
import { TodoService } from './todo.service';
import { TodoDeleteDialogComponent } from './todo-delete-dialog.component';

@Component({
  selector: 'jhi-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {
  todos?: ITodo[];
  eventSubscriber?: Subscription;

  constructor(protected todoService: TodoService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.todoService.query().subscribe((res: HttpResponse<ITodo[]>) => (this.todos = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInTodos();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ITodo): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInTodos(): void {
    this.eventSubscriber = this.eventManager.subscribe('todoListModification', () => this.loadAll());
  }

  delete(todo: ITodo): void {
    const modalRef = this.modalService.open(TodoDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.todo = todo;
  }
}
