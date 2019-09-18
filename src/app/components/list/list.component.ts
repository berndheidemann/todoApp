import {Component, OnInit} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newTodo: Todo;
  private _todos: Todo[] = [];
  searchString: string;

  constructor() {
    this._todos.push(new Todo('Rasen mähen'));
    this._todos.push(new Todo('Bier trinken'));
    this._todos.push(new Todo('Bier kaufen'));
    this.newTodo = new Todo('');
  }

  get todos(): Todo[] {
    if (!this.searchString) {
      return this._todos;
    } else {
      return this._todos.filter(t => t.label.includes(this.searchString));
    }
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
  }

  save() {
    this._todos.push(this.newTodo);
    this.newTodo = new Todo('');
  }

  del(todo: Todo) {
    this._todos = this._todos.filter(t => t !== todo);
  }
}
