import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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
  ) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
  }

  onLogin() {
    this.error = null;
    const { email, password } = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
        console.log({ user })
        this.router.navigate([''])
    })
    .catch(err => {
      switch (err.code) {
        case "auth/user-not-found":
          this.error = "Usuário ou senha inválido."
          break;
        case "auth/wrong-password":
          this.error = "Senha inválida."
          break;
        default:
          this.error = "Ocorreu um erro ao realizar o seu login, tente novamente mais tarde."
          break;
      }
      console.error("onLogin() -> Error: ", err);
    });
  }
}