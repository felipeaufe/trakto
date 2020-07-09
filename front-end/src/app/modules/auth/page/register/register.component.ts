import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) { } 

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }

  createUser () {
    const { name, email, password } = this.registerForm.value;
    this.auth.createUserWithEmailAndPassword(email, password)
    // this.auth.signInWithEmailAndPassword(email, password)
    .then( user => {
      console.log("RegisterComponent -> createUser -> user", user)
      this.router.navigate([''])
    })
    .catch( err => {
      console.warn("Error: ", err)
    });
  }

}
