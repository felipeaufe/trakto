import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from '@angular/fire/database'
import { of, Observable, throwError } from 'rxjs';

import { User } from '../../data/schema/user';

interface LoginContextInterface {
  email: string;
  password: string;
  token: string;
}

const defaultUser = {
  email: 'felipe.aufe@gmail.com',
  password: '123456',
  token: '123456'
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: string;
  userData: any; // Save logged in user data

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  login(loginContext: LoginContextInterface) {

    return this.afAuth.auth.signInWithEmailAndPassword(loginContext.email, loginContext.password)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  logout(){

  }

//   login(loginContext: LoginContextInterface): Observable<User> {
//     if (
//       loginContext.email === defaultUser.email &&
//       loginContext.password === defaultUser.password
//     ) {
//         return of(defaultUser);
//     }
//     return throwError('Invalid username or password');
//   }

//   logout(): Observable<boolean> {
//     return of(false);
//   }

  getToken() {
    return this.getToken;
  }
}