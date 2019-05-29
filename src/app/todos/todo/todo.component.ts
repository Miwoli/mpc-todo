import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../core/models/todo';
import { TodoService }from '../../core/services/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @ViewChild('todoForm') form: NgForm;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {
  }

  public submit() {
    const me = this;

    if (!me.todo.hasOwnProperty('isCompleted')) {
      me.todo.isCompleted = false;
    }

    me.todoService.post(me.todo).subscribe((res) => {
      if (me.todo.id) {
        me.todo.task = res.body.data[0].task;
      }
      if (res.status === 200) {
        me.change.emit(null);
      }
    });
  }

  public check() {
    const me = this;

    if (me.todo.id) {
      me.submit();
    }
  }

  public delete() {
    const me = this;

    me.todoService.delete(me.todo).subscribe((res) => {
      if (res.status === 200) {
        me.change.emit(null);
      }
    });
  }

}
