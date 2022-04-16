import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataServiceService {
  constructor(private httpRequest: HttpClient) {}

  getWelcomeHelloWorldBean() {
    return this.httpRequest.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean'
    ); // The <> tells the http client the structure of the response I am expecting.
  }

  getWelcomeHelloWorldWithPathVariable(name: string) {
    return this.httpRequest.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`
    ); // The ` can be used to concat parameters as shown
  }
}
