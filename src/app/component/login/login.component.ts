import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({

      name: new FormControl('', Validators.required),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])

    });

  }

  submitForm(): void {

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginForm.reset()
    } else {
      this.loginForm.markAllAsTouched();
    }



  }



}