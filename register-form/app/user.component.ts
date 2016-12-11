import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './user';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-user',
  moduleId: module.id,
  templateUrl: 'user.component.html',
  styleUrls: [ 'user.component.css' ]
})
export class UserComponent implements OnInit { 
    @Input()
    user: User;  

  constructor(
    private route: ActivatedRoute
  ) {} 

  ngOnInit(): void {
    this.user = this.route.params.value;
  } 

}
