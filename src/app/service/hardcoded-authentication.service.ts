import { Injectable } from '@angular/core';

//Allows use to determine where and at what lever can we inject this service
//This tag makes this service/component injectible using dependency injection
//So now this servic can be passed in as a dependency injection into another component constructor and called
@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'PiyushSharma' && password === 'PiyushSharma') {
      sessionStorage.setItem('authenticatedUser', username); //here we are storing the username is session storage(browser) to signal user is logged in
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
