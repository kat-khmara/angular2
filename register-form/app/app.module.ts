import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { ImageCropperComponent } from 'ng2-img-cropper';

import { AppComponent }  from './app.component';
import { FormComponent }  from './form.component';
import { LoginComponent }  from './login.component';
import { UserComponent }  from './user.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'info',
        component: UserComponent
      }
    ])
  ],
  declarations: [ 
    AppComponent,
    ImageCropperComponent,
    FormComponent,
    LoginComponent,
    UserComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
