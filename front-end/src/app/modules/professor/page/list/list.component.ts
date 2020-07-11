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

  columns: string[] = ['index', 'nome', 'acoes'];

  professores: Observable<any>;

  constructor(
    private professorService: ProfessorService,
    private professorDataService: ProfessorDataService
  ) { }

  ngOnInit(): void {
    this.professores = this.professorService.getAll();
  }

  delete(key: string) {
    this.professorService.delete(key);
  }

  edit(professor: Professor, key: string){
    this.professorDataService.obtemProfessor(professor, key);
  }

}
