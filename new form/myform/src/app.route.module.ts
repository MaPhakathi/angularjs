import {FormsComponent} from './app/components/forms/forms.component'
import { ViewComponent } from "./app/components/view/view.component";
import{DetailComponent}  from "./app/components/detail/detail.component";
import { EventsComponent } from './app/components/events/events.component';

export const approute = [
    {path: '',component: FormsComponent},
    {path:'detail',component: DetailComponent,children:[
    
    {path: 'events',component: EventsComponent},

    { path : 'view', component: ViewComponent},

    ]},

];
   
  
