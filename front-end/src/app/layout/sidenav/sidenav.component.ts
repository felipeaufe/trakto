import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../data/service/sidenav/sidenav.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  showFiller = false;

  constructor(
    private auth: AngularFireAuth,
    private sidenav: SidenavService  
  ) { }

  ngOnInit(): void {
  }

  clickMenu() { 
    this.sidenav.toggle();
  }

  onLogout() {
    this.auth.signOut()
  }
}
