import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  // todos = [
  //   new todo(1, 'Learn To Dance', false, new Date()),
  //   new todo(2, 'FiFA', false, new Date()),
  //   new todo(3, 'Siege', false, new Date()),
  //   new todo(4, 'Stock', false, new Date()),
  // ];

  // todos = [
  //   new todo(1, 'Learn To Dance', false, new Date()),
  //   new todo(2, 'FiFA', false, new Date()),
  //   new todo(3, 'Siege', false, new Date()),
  //   new todo(4, 'Stock', false, new Date()),
  // ];
  todos: todo[] = [];
  message: string = '';

  // todo = {
  //   id: 1,
  //   description: 'learn to Dance',
  // };

  constructor(private todoservice: TodoDataService, private router: Router) {}

  //code is executed on page initialisation
  ngOnInit(): void {
    this.getTodos();
  }

  //method delets and retrieves data service to send a http request using httpClient
  deleteById(id: number) {
    this.todoservice.DeleteTodos('PiyushSharma', id).subscribe((response) => {
      this.message = 'Successful deletion!';
      this.getTodos();
    });
  }

  //method update and retrieves data service to send a http request using httpClient
  updateById(id: number) {
    this.router.navigate(['/todos', id]);
  }

  //method add a new todo and retrieve data service to send a http request using httpClient
  addTodo() {
    this.router.navigate(['/todos', -1]);
  }

  //method uses retrieve data service to send a http request using httpClient
  getTodos() {
    this.todoservice.RetrieveAllTodos('PiyushSharma').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
}
