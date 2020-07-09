import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
// import { tap, delay, finalize, catchError } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { AuthService } from '../../../../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  error: string;
  isLoading: boolean;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
    // private authService: AuthService
  ) {
    // this.buildForm();
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
  }

  onLogin() {
      const { email, password } = this.loginForm.value;
      this.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
          console.log({ user })
          this.router.navigate([''])
      })
      .catch(err => {
          console.warn("Error: ", err);
      });
  }

//   get f() {
//     return this.loginForm.controls;
//   }

//   login() {
//     this.isLoading = true;

//     const credentials = this.loginForm.value;
//     this.authService
//       .login(credentials)
//       .pipe(
//         // delay(1500),
//         tap(user => {
//             console.log({ user })
//             this.router.navigate(['/'])
//         }),
//         finalize(() => (this.isLoading = false)),
//         catchError(error => of((this.error = error)))
//       )
//       .subscribe();
//   }

//   private buildForm(): void {
//     this.loginForm = this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }
}