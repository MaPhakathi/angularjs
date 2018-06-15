import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Input() name;
@Input() page;

@Input() fname;
@Input() surname;
@Input() age;
@Input() date;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigator() {

    if (name === 'events') {

      this.router.navigate(['detail/events']);
      
    }else if (this.name === 'view') {
      
      //this.router.navigate(['detail/view']);
      console.log(this.fname)
     { this.router.navigate(['detail/view'] ,{queryParams: {fname: this.fname,surname: this.surname, age: this.age ,date: this.date,}})
    };
  }
  }
}

  


  






