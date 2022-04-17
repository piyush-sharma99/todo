import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

//Allows use to determine where and at what lever can we inject this service
//This tag makes this service/component injectible using dependency injection
//So now this servic can be passed in as a dependency injection into another component constructor and called
@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(private httpRequest: HttpClient) {}

  authenticate(username: string, password: string) {}

  //This method when called takes in username and pass encrypts them and sends back a request with a header for authentication
  executeBasicAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password); //window.btoa encrypts the spring in the base 64

    //useing built in http functionality to pass in auth string by creating a header
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.httpRequest
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        // This pipe menthod carries out an action once some one subscribes to the service
        map((data) => {
          sessionStorage.setItem(TOKEN, username);
          sessionStorage.setItem(AUTHENTICATED_USER, basicAuthHeaderString);
          return data;
        })
      ); //passing in the header
    // The ` can be used to concat parameters as shown
  }

  getAuthenticatedUser() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
