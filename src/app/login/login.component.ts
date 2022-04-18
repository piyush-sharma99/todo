import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'PiyushSharma';
  password = 'PiyushSharma';
  message = 'Invalid Credentials!!!';
  inValidLogin = false;

  //Router
  //We can route using dependency Injection
  constructor(
    private router: Router,
    private hardcodedAuthenticaiton: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    if (
      this.hardcodedAuthenticaiton.authenticate(this.username, this.password)
    ) {
      this.inValidLogin = false;
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    } else {
      this.inValidLogin = true;
    }
    //console.log(this.username);
    // console.log(this.password);
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService
      .executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['welcome', this.username]);
          this.inValidLogin = false;
        },
        (error) => {
          console.log(error);
          this.inValidLogin = true;
        }
      );
  }
}
