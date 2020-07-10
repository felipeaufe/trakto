import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './page/professor.component';

export const routes: Routes = [
{
    path: '',
    redirectTo: 'professor',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProfessorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule {}