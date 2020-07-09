import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmaComponent } from './page/turma.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'turma', component: TurmaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaRoutingModule {}