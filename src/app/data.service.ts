import { Injectable } from '@angular/core';
import { Task } from '../model/task'; 
import { resolve } from 'q';


@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor() { }

 // save data 
   saveData( aboutlist: Array<Task> ) { 

        return new Promise (( resolve, reject ) => { 
        
        let data = JSON.stringify(aboutlist);     // covert Array<Task> (object) to string because localstorage can be saved only string 

            try { 
              window.localStorage.setItem( 'aboutlist', data ); 
              resolve ( true ); 
            }
            catch (err) { 
              reject ( err ); 
            }
      }); 
   }

   // get data 
   getData ( ) {
         return new Promise ( (resolve, reject) => {
       
        let data = window.localStorage.getItem ('aboutlist'); 

        console.log ("this is data: " + data ) ; 
        console.log ( typeof data ); 

          if ( data ) { 
            resolve ( JSON.parse(data) );                  // covert string to object 
            console.log ("this is data: " + data ) ; 
            console.log ( typeof data ); 
          }
          else { 
            reject ( null); 
        }
      });
   }

  
}
