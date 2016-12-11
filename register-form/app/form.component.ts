import { Component, ViewChild } from '@angular/core';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'my-form',
  moduleId: module.id,
  templateUrl: 'form.component.html',
  styleUrls: [ 'form.component.css' ]
})

export class FormComponent { 
  user = new User();
  data: any;
  cropperSettings: CropperSettings;

  showLogin = false;
  showImage - false;
    
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;

  constructor(private router: Router) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth =200;
    this.cropperSettings.croppedHeight = 200;
    this.cropperSettings.canvasWidth = 200;
    this.cropperSettings.canvasHeight = 200;
    this.cropperSettings.noFileInput = true;
    this.data = {};    
  }

  onSubmit() { 
    this.user.avatar = this.data.image;
    this.router.navigate(['/info', this.user]);
  }

  fileChangeListener($event: any) {
    var image:any = new Image();
    var myReader:FileReader = new FileReader();
    var that = this;
    var file:File = $event.target.files[0];
    myReader.onloadend = function (loadEvent:any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };
    myReader.readAsDataURL(file);
    this.showImage = true;
  } 

  login() {
    this.showLogin = true;    
  }

  deleteImg() {
    this.showImage = false;
    this.data = {};
    this.user.avatar = '';  
  }

}
