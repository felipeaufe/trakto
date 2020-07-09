import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire' 
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';

import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    NavComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
