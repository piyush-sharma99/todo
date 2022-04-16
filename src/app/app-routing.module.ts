import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

//welcome route
const routes: Routes = [
  { path: '', component: LoginComponent }, //Default path goes to login component
  { path: 'login', component: LoginComponent },
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [RouteGaurdService], //Here we created a service which implements canActivate interface(used to check conditions before allowing routhing access). So we have a service called 'RouteGaurdService' which implements canActivate which now we specify here,
    // Next time this router runs it will see the canActivate and look for it in the service and get the result and based on the result it will determine access
  },
  {
    path: 'todos',
    component: ListTodosComponent,
    canActivate: [RouteGaurdService],
  },
  {
    path: 'todos/:id',
    component: TodoComponent,
    canActivate: [RouteGaurdService],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGaurdService],
  },
  { path: '**', component: ErrorComponent }, //Any other routing goes to this page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
