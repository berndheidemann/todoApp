import {Component, OnInit} from '@angular/core';
import {Todo} from '../../model/Todo';
import {TodoDataService} from '../../services/todo-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  todo: Todo;

  constructor(private dataService: TodoDataService) {
    this.todo = new Todo();
  }

  ngOnInit() {
  }

  save() {
    this.dataService.save(this.todo);
    this.todo = new Todo();
  }

}
