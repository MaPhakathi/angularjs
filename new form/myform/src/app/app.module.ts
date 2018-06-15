import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import {FormsModule} from '@angular/forms';
import{RouterModule} from  '@angular/router';
import { ViewComponent } from './components/view/view.component'
import {approute} from '../app.route.module';
import { BookingFormComponent } from './component/booking-form/booking-form.component';
import { EventsComponent } from './components/events/events.component';
import { DetailComponent } from './components/detail/detail.component';
import { NavComponent } from './components/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ViewComponent,
    BookingFormComponent,
    EventsComponent,
    DetailComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
