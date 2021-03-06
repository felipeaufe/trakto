import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../../../data/service/professor/professor.service'
import { ProfessorDataService } from '../../../../data/service/professor/professor-data.service'
import { Professor } from '../../../../data/schema/professor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  professor: Professor;
  key: string = '';

  constructor(
    private professorService: ProfessorService,
    private professorDataService: ProfessorDataService
  ) { }

  ngOnInit(): void {
      this.professor = new Professor();
      this.professorDataService.professorAtual.subscribe(data => {
        if( data.professor && data.key ){
          this.professor = new Professor();
          this.professor.nome = data.professor.nome;
          this.key = data.key
        }
      })
  }

  onSubmit(){
    if(this.key){
      this.professorService.update(this.professor, this.key);
    }else{
      this.professorService.insert(this.professor);
    }

    this.professor = new Professor();
    this.key = null;
  }
}
