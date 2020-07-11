import { Component, OnInit, Input } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.sass']
})
export class TurmaComponent implements OnInit {
  @Input() turma: any;

  constructor(public dialog: MatDialog) {}

  openDialog(turma, key): void {
    const dialogRef = this.dialog.open(EditComponent, {
      data: {
        turma: turma,
        key: key,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}
