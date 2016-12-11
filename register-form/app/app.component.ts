import {Component} from '@angular/core'
import { FormComponent } from './form.component';
import { LoginComponent } from './login.component';
import { User } from './user';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  template: `
    <section>
      <h1>{{ title }}</h1>
      <nav>
        <a routerLink="/form" routerLinkActive="active">Register</a>
        <a (click)="login()">Login</a>
      </nav>
      <router-outlet></router-outlet>
    </section>
    <my-login [showLogin]="showLogin"></my-login>
  `,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent  {
  title = 'My custom form';  
  showLogin = false;

  login() {
    this.showLogin = true;    
  }
}
