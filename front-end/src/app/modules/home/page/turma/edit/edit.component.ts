import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Observable, Observer } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import{ ProfessorService } from '../../../../../data/service/professor/professor.service'
import{ ProfessorDataService } from '../../../../../data/service/professor/professor-data.service'

import { Turma } from '../../../../../data/schema/turma';
import { TurmaService } from '../../../../../data/service/turma/turma.service'
import { TurmaDataService } from '../../../../../data/service/turma/turma-data.service'
import { Professor } from '../../../../../data/schema/professor';

export interface DialogData {
  animal: string;
  name: string;
}

interface IHasKey
{
    key:any;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  private cores = [
    "#00d286",
    "#00b976",
    "#00c5ad",
    "#00ad98",
    "#36a8e0",
    "#2a92c4",
    "#af70c1",
    "#a45bb9",
    "#425b71",
    "#384f62",
    "#f5ce2d",
    "#f9ad29",
    "#ef9334",
    "#e06b0e",
    "#f0f3f4",
    "#c9ced2",
    "#a5b4b5",
    "#919d9d"
  ];
  professor: Professor;
  professores: Observable<any>;
  registerForm: FormGroup;
  turma: Turma;
  key: string = '';


  constructor(
    private fb: FormBuilder,
    private professorDataService: ProfessorDataService,
    private professorService: ProfessorService,
    private turmaService: TurmaService,
    private turmaDataService: TurmaDataService,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createTurma(){
    let turma     = this.turma;
    let professor = this.professor;
    
    // Update
    if(this.key){
      turma.professor_nome = professor.nome;
      turma.professor_key  = professor['key'];
      this.turmaService.update(turma, this.key);
    }
    
    // Create
    else{
      let cor       = this.cores[Math.floor(Math.random() * this.cores.length)];

      this.turma = new Turma();
      this.turmaDataService.turmaAtual.subscribe(data => {
          this.turma = new Turma();
          this.turma.nome           = turma.nome;
          this.turma.cor            = cor;
          this.turma.hora_inicio    = turma.hora_inicio;
          this.turma.hora_final     = turma.hora_final;
          this.turma.idade_de       = turma.idade_de;
          this.turma.idade_ate      = turma.idade_ate;
          this.turma.professor_nome = professor.nome;
          this.turma.professor_key  = professor['key'];
      })

      this.turmaService.insert(this.turma);
    }

    this.turma = new Turma();
    this.key = null;

    this.onNoClick();
  }

  Test(param: IHasKey){
    console.log(param);
    return false;
  }

  ngOnInit() {

    console.log("turma", this.data["turma"])
    // Get all professores
    this.professores = this.professorService.getAll();

    // Prepare professor
    this.professor = new Professor();
    this.professor.nome = '';
      this.professorDataService.professorAtual.subscribe(data => {
        if( data.professor && data.key ){
          this.professor = new Professor();
          this.professor.nome = data.professor.nome;
          this.key = data.key
        }
      })

    // Prepare Turma
    this.turma = new Turma();
    if(this.data["key"]){
      this.key                    = this.data["key"];
      this.turma.cor              = this.data["turma"]["cor"];
      this.turma.hora_final       = this.data["turma"]["hora_final"];
      this.turma.hora_inicio      = this.data["turma"]["hora_inicio"];
      this.turma.idade_ate        = this.data["turma"]["idade_ate"];
      this.turma.idade_de         = this.data["turma"]["idade_de"];
      this.turma.nome             = this.data["turma"]["nome"];
      this.turma.professor_key    = this.data["turma"]["professor_key"];
      this.turma.professor_nome   = this.data["turma"]["professor_nome"];
    }
    // this.turmaDataService.turmaAtual.subscribe(data => {
    //   if( data.turma && data.key ){
    //     // this.turma = new Turma();
    //     // this.turma.nome = data.turma.nome;
    //     // this.key = data.key
    //   }
    // })

    // Form validate
    this.registerForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }

  getOptionText(option) {
    return option ? option.nome : ''; 
  }

}
