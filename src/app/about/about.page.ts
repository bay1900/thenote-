import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task'; 
import { DataService } from '../data.service';
import { uuid } from 'uuid'; 

import { AuthenticationService } from '../authentication.service'; 



@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {


// the array of input !
  about: Array<Task> = [] ; 
  aboutInput: string= ''; 


  constructor( public dataService: DataService ) { 

  

  }

  ngOnInit() {

    // every time user hit this page load all data in local storage 
    this.loadAbout(); 


    let gg: number = 1993; 
    
    console.log ("this is UUID" +  uuid() ); 
  }


   createAbout( aboutName: string ) { 

   //  let statusx: string = String(status); 
     let aboutDate: number = new Date().getTime(); 
     let aboutx = { title: aboutName, date:  aboutDate, status: false  };
     return aboutx;
   }


   storeData(aboutInput)  {
        if ( aboutInput.length > 0 ) { 
          console.log ( "adding ..."); 
              this.about.push(this.createAbout(this.aboutInput));
              this.aboutInput = '';               // clear after enter 
              
              this.dataService.saveData( this.about ); 
          }
        else { 
             console.log ("Input cant be empty... "); 
        }
   }

   loadAbout () { 
     this.dataService.getData() 
        .then( (response) => { 
         // reponse when succes 
         if ( Response !== null ) { 
            this.about = <Array<Task>> response ; 
         }
        })
        .catch((err) => { 
            console.log ( err ); 
        });
   }
  

   // delete item 
   deleteAbout (date) { 
       this.about.forEach ((a, index ) => { 
            
         if ( a.date == date ) { 
          this.about.splice( index, 1 );  
         }
         else { 
           console.log ( "cant splic "); 
         }
         
            console.log ("index: " + index );
             
       }); 
       this.dataService.saveData( this.about);
   }

   changeStatus(date) { 
     
     
   // console.log(i); // show index of each element ! 
    

    this.about.forEach ( ( a  ) => { 
  
        if (a.date == date )  { 
             a.status  = a.status ? false : true ;  
             console.log ( "date: " + date );
             console.log ( "a.date" + a.date ); 
        }
        else { 
          console.log ( "Status is not changed ! pleas check 'changeStatus method'" ); 
        }
    }); 
        
     this.dataService.saveData(this.about); 
   }

   
}
