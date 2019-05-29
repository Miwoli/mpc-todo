import { Component, OnInit } from '@angular/core';
import { Todo } from '../core/models/todo';
import { TodoService } from '../core/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Todo[];
  public newTodo: Todo;
  public empty: boolean = false;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {
    const me = this;

    me.newTodo = new Todo;

    me.getAll();
  }

  private getAll(): void {
    const me = this;

    me.todoService.getAll().subscribe(todos => {
      me.todos = todos;
      me.empty = false;
    }, (err) => {
      if (err.status === 404) {
        me.todos = [];
        me.empty = true;
      } else {
        console.error(err);
      }
    })
  }

}
