import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../data/service/sidenav/sidenav.service';


@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.sass']
})
export class ContentLayoutComponent implements OnInit {
  
//   @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  public sidenavMode = 'push';
  public hasBackdrop = true;


  constructor(private sideNavService: SidenavService) { 
  }

  ngOnInit() { 

    // Open the sidenav
    this.toggleSidenav();

    // Mobile
    if (window.screen.width <= 360) { // 768px portrait
      this.sidenavMode = 'push';
      this.hasBackdrop = true;
      this.closeSidenav();
    }else{
      this.sidenavMode = 'side';
      this.hasBackdrop = false;
    }
  
  } 

  toggleSidenav() {
    this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });
  }

  closeSidenav() {
    this.sideNavService.sideNavCloseSubject.subscribe(()=> {
      this.sidenav.close();
    });
  }
}
  