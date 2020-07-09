
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
// import { SharedModule } from '@shared/shared.module';


import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // SharedModule
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }