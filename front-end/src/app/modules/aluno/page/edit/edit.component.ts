import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlunoService } from '../../../../data/service/aluno/aluno.service';
import { AlunoDataService } from '../../../../data/service/aluno/aluno-data.service';
import { Aluno } from '../../../../data/schema/aluno';
import { TurmaService } from '../../../../data/service/turma/turma.service'
import { Observable } from 'rxjs';
import { UploadComponent } from '../upload/upload.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass'],
  // directives: [UploadComponent]
})
export class EditComponent implements OnInit {

  @ViewChild(UploadComponent) uploadComponent:UploadComponent;


  aluno: Aluno;
  key: string = '';
  turmas: Observable<any>;
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  aluno_turmas: Observable<any>;
  image_url: string;

  constructor(
    private alunoService: AlunoService,
    private alunoDataService: AlunoDataService,
    private turmaService: TurmaService,
  ) { }

  ngOnInit(): void {
    // Get all turmas
      this.turmas = this.turmaService.getAll();

      this.aluno = new Aluno();
      this.alunoDataService.alunoAtual.subscribe(data => {
        if( data.aluno && data.key ){
          console.log({data})
          this.aluno = new Aluno();
          this.aluno.nome         = data.aluno.nome;
          this.aluno.idade        = data.aluno.idade;
          this.aluno.nome_parente = data.aluno.nome_parente;
          this.key                = data.key;
          
          // Foto
          this.uploadComponent.setFotoPreview(data.aluno.foto);
          this.aluno.foto = data.aluno.foto;

          // Turmas
          this.aluno_turmas = data['turma'];
          this.toppings.setValue(data['turma']);

        }
      });
  }

  async onSubmit(){

    let image_url = this.aluno.foto;
    
    if(!this.key){
      image_url = await this.uploadComponent.uploadImage() as string;
    }

    let aluno          = new Aluno();
    aluno.nome         = this.aluno.nome;
    aluno.idade        = this.aluno.idade;
    aluno.foto         = image_url.toString();
    aluno.nome_parente = this.aluno.nome_parente;
    aluno.turma        = this.aluno_turmas;

    let key = this.key;
    console.log({aluno, key})

    if(this.key){
      this.alunoService.update(aluno, this.key);
    }else{
      this.alunoService.insert(aluno);
    }
    
    this.aluno = new Aluno();
    this.key = null;
    this.aluno_turmas = null;
    this.uploadComponent.setFotoPreview('');
  }
}
