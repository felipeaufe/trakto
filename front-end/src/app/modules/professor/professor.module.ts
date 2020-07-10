import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProfessorRoutingModule } from './professor.routing';
import { ProfessorComponent } from './page/professor.component'
import { EditComponent } from './page/edit/edit.component'
import { ListComponent } from './page/list/list.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  entryComponents: [
    EditComponent,
  ]
})
export class ProfessorModule { }
