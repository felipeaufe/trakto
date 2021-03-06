import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlunoRoutingModule } from './aluno.routing';
import { AlunoComponent } from './page/aluno.component';
import { EditComponent } from './page/edit/edit.component';
import { ListComponent } from './page/list/list.component'

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { UploadComponent } from './page/upload/upload.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import { AlunoTurmasPipe } from '../../data/pipe/aluno-turmas.pipe';


@NgModule({
  declarations: [
    AlunoComponent,
    EditComponent,
    ListComponent,
    UploadComponent,
    AlunoTurmasPipe,
  ],
  imports: [ 
    AlunoRoutingModule,
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTableModule,
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class AlunoModule { }
