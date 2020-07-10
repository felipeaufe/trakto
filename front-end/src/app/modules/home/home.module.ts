import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component'
import { HomeRoutingModule } from './home.routing';
import { TurmaComponent } from './page/turma/turma.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EditComponent } from './page/turma/edit/edit.component';
import { ShowComponent } from './page/turma/show/show.component';

@NgModule({
  declarations: [
    HomeComponent,
    TurmaComponent,
    EditComponent,
    ShowComponent,
  ],
  imports: [ 
    CommonModule,
    
    FontAwesomeModule,
    HomeRoutingModule,
    
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
  ],
  exports: [],
  providers: [],
  entryComponents: []
  })
export class HomeModule { }
