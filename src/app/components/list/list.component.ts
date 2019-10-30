import {Component, OnInit} from '@angular/core';
import {Todo} from '../../model/Todo';
import {TodoDataService} from '../../services/todo-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newTodo: Todo;
  searchString: string;

  constructor(private dataService: TodoDataService) {

  }


  get todos(): Todo[] {
    if (!this.searchString) {
      return this.dataService.todos;
    } else {
      return this.dataService.todos.filter(t => t.label.includes(this.searchString));
    }
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
    this.dataService.toggle(todo);
  }

  del(todo: Todo) {
    this.dataService.del(todo);
  }


}
