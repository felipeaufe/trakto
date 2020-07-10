import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module'
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard' ;

import { HomeModule } from './modules/home/home.module';
import { ProfessorModule } from './modules/professor/professor.module';
import { AlunoModule } from './modules/aluno/aluno.module';
import { TurmaModule } from './modules/turma/turma.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login'])

const routes: Routes = [
    {
      path: 'auth',
      component: AuthLayoutComponent,
      loadChildren: () => AuthModule
    },
    {
      path: '',
      component: ContentLayoutComponent,
      canActivate: [AngularFireAuthGuard],
      data: { authGuardPipe: redirectUnauthorizedToLogin },
      children: [
        {
          path: '',
          loadChildren: () => HomeModule
        },
        {
          path: 'professor',
          loadChildren: () => ProfessorModule
        },
        {
          path: 'aluno',
          loadChildren: () => AlunoModule
        },
        {
          path: 'turma',
          loadChildren: () => TurmaModule
        },
      ]
    },
  
    // Fallback when no prior routes is matched
    { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
