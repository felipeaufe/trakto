import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TurmaRoutingModule } from './turma.routing';
import { TurmaComponent } from './page/turma.component';
import { ListComponent } from './page/list/list.component'

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TurmaComponent,
    ListComponent,
  ],
  imports: [ 
      TurmaRoutingModule,
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule

    MatTableModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class TurmaModule { }
