import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataServiceService {
  constructor(private httpRequest: HttpClient) {}

  getWelcomeHelloWorldBean() {
    return this.httpRequest.get<HelloWorldBean>(`${API_URL}/hello-world-bean`); // The <> tells the http client the structure of the response I am expecting.
  }

  getWelcomeHelloWorldWithPathVariable(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthHttpHeader();

    // //useing built in http functionality to pass in auth string by creating a header
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString,
    // });
    return this.httpRequest.get<HelloWorldBean>(
      `${API_URL}/hello-world/path-variable/${name}`
      // { headers } //passing in the header
    ); // The ` can be used to concat parameters as shown
  }

  //Encrypting username and password using base 64
  // createBasicAuthHttpHeader() {
  //   let username = 'user';
  //   let password = 'password';
  //   let basicAuthHeaderString =
  //     'Basic ' + window.btoa(username + ':' + password); //window.btoa encrypts the spring in the base 64

  //   return basicAuthHeaderString;
  // }
}
