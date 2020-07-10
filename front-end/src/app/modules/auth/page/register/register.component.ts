import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Professor } from '../../../../data/schema/professor';
import{ ProfessorService } from '../../../../data/service/professor/professor.service'
import{ ProfessorDataService } from '../../../../data/service/professor/professor-data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  error: string;
  registerForm: FormGroup;
  professor: Professor;
  key: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
    private professorService: ProfessorService,
    private professorDataService: ProfessorDataService
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
    .then( user => {
      console.log("RegisterComponent -> createUser -> user", user)
      this.createProfessor(name, user.user.uid, email);
      this.router.navigate([''])
    })
    .catch( err => {
      switch (err.code) {
        case "auth/email-already-in-use":
          this.error = "E-mail já cadastrado."
          break;
        default:
          this.error = "Ocorreu um erro ao realizar o seu cadastro, tente novamente mais tarde."
          break;
      }

      console.error("createUser() -> Error: ", err);
    });
  }

  createProfessor(name: string, uid: string, email: string){
    this.professor = new Professor();
    this.professorDataService.professorAtual.subscribe(data => {
        this.professor = new Professor();
        this.professor.nome = name;
        this.professor.email = email;
        this.professor.auth_uid = uid;
    })

    this.professorService.insert(this.professor);
    this.professor = new Professor();
    this.key = null;
  }
}
