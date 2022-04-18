import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todo } from 'src/app/list-todos/list-todos.component';
import { TODO_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private httpRequest: HttpClient) {}

  RetrieveAllTodos(username: string) {
    return this.httpRequest.get<todo[]>(
      `${TODO_JPA_API_URL}/users/${username}/todos`
    ); // The <> tells the http client the structure of the response I am expecting.
  }

  DeleteTodos(username: string, id: number) {
    return this.httpRequest.delete<todo[]>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    ); // The <> tells the http client the structure of the response I am expecting.
  }

  RetrieveTodos(username: string, id: number) {
    return this.httpRequest.get<todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    ); // The <> tells the http client the structure of the response I am expecting.
  }

  UpdateTodos(username: string, id: number, todo: todo) {
    return this.httpRequest.put(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
      todo
    ); // The <> tells the http client the structure of the response I am expecting.
  }

  AddTodos(username: string, id: number, todo: todo) {
    return this.httpRequest.post(
      `${TODO_JPA_API_URL}/users/${username}/todos`,
      todo
    ); // The <> tells the http client the structure of the response I am expecting.
  }
}
