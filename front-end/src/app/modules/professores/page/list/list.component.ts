import { Component, OnInit } from '@angular/core';
import{ ProfessorService } from '../../../../data/service/professor/professor.service'
import{ ProfessorDataService } from '../../../../data/service/professor/professor-data.service'
import { Observable } from 'rxjs';
import { Professor } from '../../../../data/schema/professor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  professores: Observable<any>;

  constructor(
    private _professorService: ProfessorService,
    private _professorDataService: ProfessorDataService
  ) { }

  ngOnInit(): void {
    this.professores = this._professorService.getAll();
  }

  delete(key: string) {
    this._professorService.delete(key);
  }

  edit(professor: Professor, key: string){
    this._professorDataService.obtemProfessor(professor, key);
  }

}
