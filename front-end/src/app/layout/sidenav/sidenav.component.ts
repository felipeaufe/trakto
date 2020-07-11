import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../data/service/sidenav/sidenav.service';
import { AngularFireAuth } from '@angular/fire/auth';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  showFiller = false;
  user = [];

  public faSignOutAlt = faSignOutAlt;
  public faHome = faHome;

  constructor(
    private auth: AngularFireAuth,
    private sidenav: SidenavService  
  ) { }

  ngOnInit(): void {
  }

  clickMenu() { 
    if (window.screen.width <= 360) { // 768px portrait
      this.sidenav.toggle();
    }
  }

  onLogout() {
    this.auth.signOut()
  }
}
