import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlunoService } from '../../../../data/service/aluno/aluno.service';
import { AlunoDataService } from '../../../../data/service/aluno/aluno-data.service';
import { Aluno } from '../../../../data/schema/aluno';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  aluno: Aluno;
  key: string = '';

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    private alunoService: AlunoService,
    private alunoDataService: AlunoDataService
  ) { }

  ngOnInit(): void {
      this.aluno = new Aluno();
      this.alunoDataService.alunoAtual.subscribe(data => {
        if( data.aluno && data.key ){
          this.aluno = new Aluno();
          
          this.aluno.nome         = data.aluno.nome;
          this.aluno.idade        = data.aluno.idade;
          this.aluno.foto         = data.aluno.foto;
          this.aluno.nome_parente = data.aluno.nome_parente;
          this.aluno.turma        = data.aluno.turma;
          this.key                = data.key;
        }
      });
  }

  onSubmit(){
    if(this.key){
      this.alunoService.update(this.aluno, this.key);
    }else{
      this.alunoService.insert(this.aluno);
    }

    this.aluno = new Aluno();
    this.key = null;
  }
}
