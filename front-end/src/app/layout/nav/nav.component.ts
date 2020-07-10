import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { SidenavService } from '../../data/service/sidenav/sidenav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  public faGithub = faGithub;
  public repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';
  public isDarkTheme$: Observable<boolean>;

  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/professor', title: 'Professor' },
    { link: '/aluno', title: 'Aluno' }
  ];

  constructor(
      private sidenav: SidenavService  
  ) {}

  ngOnInit() { }  

  clickMenu() { 
    this.sidenav.toggle();
  }
}