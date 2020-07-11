import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { EditComponent } from './turma/edit/edit.component';
import { MatDialog } from '@angular/material/dialog';
import { TurmaService } from '../../../data/service/turma/turma.service'
import { Observable } from 'rxjs';
import { isObservable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public faPlus = faPlus;
  turmas: Observable<any>;

  constructor(
    public dialog: MatDialog,
    private turmaService: TurmaService,
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      // width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  ngOnInit(): void {
    this.turmas = this.turmaService.getAll();
    // this.turmas = [
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    // ];
  }

}
