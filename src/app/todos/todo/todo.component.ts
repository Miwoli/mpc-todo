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

    me.todoService.post(me.todo).subscribe(() => {
      me.change.emit(null);
    });
  }

  public delete() {
    const me = this;

    me.todoService.delete(me.todo).subscribe((res) => {
      console.log(res);
      if (res.status === 200) {
        me.change.emit(null);
      }
    });
  }

}
