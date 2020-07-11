import { Component, OnInit } from '@angular/core';
import{ AlunoService } from '../../../../data/service/aluno/aluno.service'
import{ AlunoDataService } from '../../../../data/service/aluno/aluno-data.service'
import { Observable } from 'rxjs';
import { Aluno } from '../../../../data/schema/aluno';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  columns: string[] = [
    // 'index',
    'foto',
    'nome',
    'idade',
    'acoes'
  ];

  alunos: Observable<any>;

  constructor(
    private alunoService: AlunoService,
    private alunoDataService: AlunoDataService
  ) { }

  ngOnInit(): void {
    this.alunos = this.alunoService.getAll();
  }

  delete(key: string) {
    this.alunoService.delete(key);
  }

  edit(aluno: Aluno, key: string){
    this.alunoDataService.obtemAluno(aluno, key);
  }

}
