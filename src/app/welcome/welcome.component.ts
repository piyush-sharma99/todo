// = java version

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';

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

  //public SpringBootFirstWebApp(){}
  //ActivateRoute
  constructor(private route: ActivatedRoute) {}

  username: string = this.route.snapshot.params['name'];

  ngOnInit(): void {
    console.log(this.message);
  }
}
