import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  public repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';
  public isDarkTheme$: Observable<boolean>;

  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/professor', title: 'Professor' },
    { link: '/aluno', title: 'Aluno' }
  ];

  constructor(private auth: AngularFireAuth,) {}

  ngOnInit() { }  

  onLogout() {
      this.auth.signOut()
  }
}