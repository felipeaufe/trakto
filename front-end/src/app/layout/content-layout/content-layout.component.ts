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



  constructor(private sideNavService: SidenavService) { 
  }

  ngOnInit() { 
    this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });
    this.sideNavService.sideNavCloseSubject.subscribe(()=> {
      this.sidenav.close();
    });
  } 
}
  