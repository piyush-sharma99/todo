import { Component, OnInit } from '@angular/core';

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
  todos = [
    new todo(1, 'Learn To Dance', false, new Date()),
    new todo(2, 'FiFA', false, new Date()),
    new todo(3, 'Siege', false, new Date()),
    new todo(4, 'Stock', false, new Date()),
  ];

  // todo = {
  //   id: 1,
  //   description: 'learn to Dance',
  // };

  constructor() {}

  ngOnInit(): void {}
}
