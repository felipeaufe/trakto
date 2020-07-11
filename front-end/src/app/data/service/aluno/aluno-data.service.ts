import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Aluno } from '../../schema/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoDataService {

  constructor() { }

  private alunoSource = new BehaviorSubject({ 
    aluno: null,
    key: ''
  });

  alunoAtual = this.alunoSource.asObservable();

  obtemAluno(aluno: Aluno, key: string){
    this.alunoSource.next({
      aluno: aluno,
      key: key
    })
  };
}
