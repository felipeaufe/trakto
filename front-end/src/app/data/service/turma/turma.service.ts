import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Turma } from '../../schema/turma';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(turma: Turma) {
    this._angularFireDatabase.list("turmas").push(turma)
    .then((result: any) => {
        console.log(result)
    });
  }

  update(turma: Turma, key: string) {
    this._angularFireDatabase.list("turmas").update(key, turma);
  }

  getAll() {
    return this._angularFireDatabase.list("turmas")
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(data => ({ key: data.payload.key, ...data.payload.val() as {} }));
      })
    )
  }

  delete(key: string) {
    this._angularFireDatabase.object(`turmas/${key}`).remove()
  }
}
