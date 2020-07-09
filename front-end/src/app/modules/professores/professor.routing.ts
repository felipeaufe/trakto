import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './page/professores.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'professor',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProfessoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule {}