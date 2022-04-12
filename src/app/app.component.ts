import { Component } from '@angular/core';

//Component decorator built into angular to specify components
@Component({
  selector: 'app-root',  // Tag name to call this component
  templateUrl: './app.component.html', //Specifying the html file that we want to use
  //template: '<h1>content</h1>'
  styleUrls: ['./app.component.css']  //Specifying the css file we want to use
})
export class AppComponent {
  title = 'Piyush ToDo List';
}
