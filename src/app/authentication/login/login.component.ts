import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { log } from 'util';


@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
})
export class LoginComponent implements OnInit {
  
  form__login:FormGroup;

  constructor() { }

  ngOnInit() {
    this.form__login = new FormGroup({
      email: new FormControl(null, [
          Validators.required, 
          Validators.email
      ]),
      password: new FormControl(null, Validators.required),
  });

  }

  onSubmit(){
    console.log(this.form__login);
  }

}
