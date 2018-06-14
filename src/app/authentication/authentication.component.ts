import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from './authentication.service';
import { log } from 'util';
import { User } from 'src/app/authentication/user.model';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  form__registration: FormGroup;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.form__registration = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(null, [
          Validators.required, 
          Validators.email
      ]),
      password: new FormControl(null, Validators.required),
  });
  }

  onSubmit(){
    console.log('v log from auth.component v');
    console.log(this.form__registration); // value contains the user inputs formatted in {}

    const user = new User(
      this.form__registration.value.email, 
      this.form__registration.value.password, 
      this.form__registration.value.userName
    );

    this.authenticationService
    .register(user)
    .subscribe(
      data=>console.log(data),
      error=>console.log(error)
    ); 
    // above passes an user object like below to authService  
    // User {userName: "terumikusaka", email: "t.kusaka3@gmail.com", password: "123456"}

    this.form__registration.reset();
  }
}
