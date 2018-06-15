import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  fname : '';
  surname :'';
  age :'';
  date:'';
  pages=[

    {name:'events', page: 'events'},
    {name:'view', page:'view'},
  ]
  

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(paramas =>{

  
      
      
      this.fname= paramas['name'];
      this.surname=paramas['Surname'];
      this.age=paramas['age'];
      this.date=paramas['date'];

    
      console.log(this.fname);
       console.log(this.surname);
       console.log(this.age);
       console.log(this.date);
   
});
 

}

}

