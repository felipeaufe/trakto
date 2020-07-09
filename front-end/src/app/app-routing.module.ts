import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module'
import { AuthModule } from './modules/auth/auth.module'
import { ProfessorModule } from './modules/professores/professor.module'
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard' ;

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
