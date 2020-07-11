import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Turma } from '../../schema/turma';

@Injectable({
  providedIn: 'root'
})
export class TurmaDataService {

  constructor() { }

  private turmaSource = new BehaviorSubject({ 
    turma: null,
    key: ''
  });

  turmaAtual = this.turmaSource.asObservable();

  obtemTurma(turma: Turma, key: string){
    this.turmaSource.next({
      turma: turma,
      key: key
    })
  };
}
