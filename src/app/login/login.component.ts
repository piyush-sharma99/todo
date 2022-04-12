import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private hardcodedAuthenticaiton: HardcodedAuthenticationService
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
}
