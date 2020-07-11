import { Component, OnInit } from '@angular/core';
import{ TurmaService } from '../../../../data/service/turma/turma.service'
import{ TurmaDataService } from '../../../../data/service/turma/turma-data.service'
import { Observable } from 'rxjs';
import { Turma } from '../../../../data/schema/turma';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  columns: string[] = [
    'cor',
    'nome',
    'idade_de',
    'professor_nome',
    'acoes'
  ];

  turmas: Observable<any>;

  constructor(
    private turmaService: TurmaService,
    private turmaDataService: TurmaDataService
  ) { }

  ngOnInit(): void {
    this.turmas = this.turmaService.getAll();
  }

  delete(key: string) {
    this.turmaService.delete(key);
  }

  edit(turma: Turma, key: string){
    this.turmaDataService.obtemTurma(turma, key);
  }

}
