// = java version

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { WelcomeDataServiceService } from '../service/data/welcome-data-service.service';

//@ComponentScan(
// value = "com.in28mins.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})

//public class SpringBootFirstWebApp implements SomeInterface{}
export class WelcomeComponent implements OnInit {
  message: string = 'Some welcome Value';
  welcomeMessageFromService: string = '';

  //public SpringBootFirstWebApp(){}
  //ActivateRoute
  constructor(
    private route: ActivatedRoute,
    public RequestService: WelcomeDataServiceService
  ) {}

  username: string = this.route.snapshot.params['name'];

  ngOnInit(): void {
    console.log(this.message);
  }

  getCustomMessage() {
    console.log(
      this.RequestService.getWelcomeHelloWorldBean().subscribe(
        (response) => this.handleSuccessfulResponse(response.message),
        (error) => this.handleErrorResponse(error) //we are basically saying if we have an erro use the following function and pass the error into it./
      )
    );
    //Here we use the subscribe functionality to execute the http request in the function called. Otherwise an observable will be displayed without any result
    //Subscribe is an asyc call therefore, we need to tell it what to do when it recieves a response
    // the arrow function takes what ever the result is and passes it to the fuction mentioned there
  }

  getCustomMessageWithParameter() {
    console.log(
      this.RequestService.getWelcomeHelloWorldWithPathVariable(
        this.username
      ).subscribe(
        (response) => this.handleSuccessfulResponse(response.message),
        (error) => this.handleErrorResponse(error) //we are basically saying if we have an erro use the following function and pass the error into it./
      )
    );
    //Here we use the subscribe functionality to execute the http request in the function called. Otherwise an observable will be displayed without any result
    //Subscribe is an asyc call therefore, we need to tell it what to do when it recieves a response
    // the arrow function takes what ever the result is and passes it to the fuction mentioned there
  }

  handleSuccessfulResponse(response: string) {
    this.welcomeMessageFromService = response;
    console.log(response);
  }

  handleErrorResponse(error: any) {
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
