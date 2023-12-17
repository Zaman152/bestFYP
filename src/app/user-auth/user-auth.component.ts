// user-auth.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true;
  authError: string = "";
  // signUp: SignUp = { name: "", email: "", password: "" };
  // loginData: Login = { email: "", password: "" }; 

  constructor() {}

  ngOnInit(): void {}

  SignUp(data: object) {
    console.warn(data);
  }

  Login(data : object) {
    console.warn(data);
  }

  openSignUp() {
    this.showLogin = false;
  }

  openLogin() {
    this.showLogin = true;
  }
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}
