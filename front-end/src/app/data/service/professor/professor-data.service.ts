import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Professor } from '../../schema/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorDataService {

  constructor() { }

  private professorSource = new BehaviorSubject({ 
    professor: null,
    key: ''
  });

  professorAtual = this.professorSource.asObservable();

  obtemProfessor(professor: Professor, key: string){
    this.professorSource.next({
      professor: professor,
      key: key
    })
  };
}
