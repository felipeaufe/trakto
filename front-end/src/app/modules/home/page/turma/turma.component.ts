import { Component, OnInit, Input } from '@angular/core';
import { ShowComponent } from './show/show.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.sass']
})
export class TurmaComponent implements OnInit {
  @Input() turma: any;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ShowComponent, {
      // width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}
