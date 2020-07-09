import { NgModule } from '@angular/core';
import { ProfessorRoutingModule } from './professor.routing';
import { CommonModule } from "@angular/common";

import { ProfessoresComponent } from './page/professores.component'
import { EditComponent } from './page/edit/edit.component'
import { ListComponent } from './page/list/list.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfessoresComponent,
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
