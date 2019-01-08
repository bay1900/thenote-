import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  

  constructor( private afAuth: AngularFireAuth  ) {




   }

   signup (email, password ) { 
    this.afAuth.auth.createUserWithEmailAndPassword( email, password )
    .catch((error )=> { 
        //check what is the error 
      });
    }
    handleSignUpError ( error ) { 
      let message = error.message; 
      switch ( message ) { 
        case 'auth/email-already-in-use':
        return  'email already in used '; 
        case 'auth/operation-not-allowed':
        return 'signuo is not enabled at the moment'; 
        case 'auth/invalid-email':
        return 'email is not valid';
        case  'auth/weak-password ': 
        return ' password is weak';  
        default: 
        return null;
        

      }

    }

    signin (email, password ) {
      
      this.afAuth.auth.signInWithEmailAndPassword ( email, password )
      .catch (( err ) => { 
// charge the error ! 
      }); 

    }
}
