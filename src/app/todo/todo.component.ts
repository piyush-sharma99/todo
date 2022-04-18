import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListTodosComponent, todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(
    private router: Router,
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) {}

  todo: todo;
  id: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new todo(
      this.id,
      'Enter Description here ...',
      false,
      new Date()
    );

    if (this.id != -1) {
      this.todoService
        .RetrieveTodos('piyush', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService
        .AddTodos('piyush', this.id, this.todo)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['/todos']);
        });
    }
    this.todoService
      .UpdateTodos('piyush', this.id, this.todo)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['/todos']);
      });
  }
}
