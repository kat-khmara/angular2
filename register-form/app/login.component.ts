import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-login',
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: [ 'form.component.css', 'login.component.css' ]
})

export class LoginComponent implements OnInit { 
  @Input() showLogin: string;
  
  ngOnInit() {
    
  } 

  showForm = true;
  onLoginSubmit() { 
    this.showForm = false; 
  }
  close() {
    this.showLogin = false;
  }
}
