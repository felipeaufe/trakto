import { NgModule } from '@angular/core';
// import { CommonModule } from "@angular/common";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlunoRoutingModule } from './aluno.routing';
import { AlunoComponent } from './page/aluno.component'


@NgModule({
  declarations: [
    AlunoComponent,
  ],
  imports: [ 
      AlunoRoutingModule,
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class AlunoModule { }
