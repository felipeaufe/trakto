import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './page/aluno.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'aluno',
        pathMatch: 'full'
      },
      {
        path: '',
        component: AlunoComponent
      }
    ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AlunoRoutingModule {}