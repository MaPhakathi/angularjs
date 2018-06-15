import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  name = '';
  surname = '';
  age ='';
  date='';
 
   constructor(private router:Router) { }
 
   ngOnInit() {
   }
   
  
   onLogin(){
     console.log(this.name);
    //  console.log(this.surname);
    //  console.log(this.age);
    //  console.log(this.date);
     this.router.navigate(['detail'],{queryParams: {name: this.name,Surname:this.surname,age: this.age,date: this.date,}});
 
   }
}
