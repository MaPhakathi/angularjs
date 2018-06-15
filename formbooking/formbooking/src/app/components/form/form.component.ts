import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  name = '';
  surname = '';
  age ='';
 
   constructor() { }
 
   ngOnInit() {
   }
 
   onLogin(){
     console.log(this.name);
     console.log(this.surname);
     console.log(this.age);
 
   }

}
