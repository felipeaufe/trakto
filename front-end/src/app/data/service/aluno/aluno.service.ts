import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Aluno } from '../../schema/aluno';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(aluno: Aluno) {
    this._angularFireDatabase.list("alunos").push(aluno)
    .then((result: any) => {
        console.log(result)
    });
  }

  update(aluno: Aluno, key: string) {
    this._angularFireDatabase.list("alunos").update(key, aluno);
  }

  getAll() {
    return this._angularFireDatabase.list("alunos")
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(data => ({ key: data.payload.key, ...data.payload.val() as {} }));
      })
    )
  }

  delete(key: string) {
    this._angularFireDatabase.object(`alunos/${key}`).remove()
  }
}
