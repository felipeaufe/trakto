import { NgModule } from '@angular/core';
// import { CommonModule } from "@angular/common";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TurmaRoutingModule } from './turma.routing';
import { TurmaComponent } from './page/turma.component'
@NgModule({
  declarations: [
    TurmaComponent,
  ],
  imports: [ 
      TurmaRoutingModule,
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class TurmaModule { }
