import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Professor } from '../../schema/professor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(professor: Professor) {
    this._angularFireDatabase.list("professores").push(professor)
    .then((result: any) => {
        console.log(result.key)
    });
  }

  update(professor: Professor, key: string) {
    this._angularFireDatabase.list("professores").update(key, professor);
  }

  getAll() {
    return this._angularFireDatabase.list("professores")
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(data => ({ key: data.payload.key, ...data.payload.val() as {} }));
      })
    )
  }

  delete(key: string) {
    this._angularFireDatabase.object(`professores/${key}`).remove()
  }
}
