import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProfessorRoutingModule } from './professor.routing';
import { ProfessorComponent } from './page/professor.component'
import { EditComponent } from './page/edit/edit.component'
import { ListComponent } from './page/list/list.component'
import { MatTableModule } from '@angular/material/table';


import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ProfessorComponent,
    EditComponent,
    ListComponent
  ],
  imports: [ 
    CommonModule,
    ProfessorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [],
  providers: [],
  entryComponents: [
    EditComponent,
  ]
})
export class ProfessorModule { }
