import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private httpRequest: HttpClient) {}

  RetrieveAllTodos(username: string) {
    return this.httpRequest.get<todo[]>(
      `http://localhost:8080/users/${username}/todos`
    ); // The <> tells the http client the structure of the response I am expecting.
  }

  DeleteTodos(username: string, id: number) {
    return this.httpRequest.delete<todo[]>(
      `http://localhost:8080/users/${username}/todos/${id}`
    ); // The <> tells the http client the structure of the response I am expecting.
  }

  RetrieveTodos(username: string, id: number) {
    return this.httpRequest.get<todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    ); // The <> tells the http client the structure of the response I am expecting.
  }

  UpdateTodos(username: string, id: number, todo: todo) {
    return this.httpRequest.put(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo
    ); // The <> tells the http client the structure of the response I am expecting.
  }

  AddTodos(username: string, id: number, todo: todo) {
    return this.httpRequest.post(
      `http://localhost:8080/users/${username}/todos`,
      todo
    ); // The <> tells the http client the structure of the response I am expecting.
  }
}
