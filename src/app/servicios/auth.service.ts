import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { resolve } from 'q';
import { Router } from "@angular/router";
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, 
    private router: Router) { }

  login(email:string, password:string){

    return new Promise ((resolve, rejected ) => {
      this.AFauth.auth.signInWithEmailAndPassword(email , password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout(){
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['./login']);
    })
  }
}
