import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Added........
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BuslistComponent } from './buslist/buslist.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { RouteslistComponent } from './routeslist/routeslist.component';
import { RecordsandprofitsComponent } from './recordsandprofits/recordsandprofits.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddEditrouteComponent } from './add-editroute/add-editroute.component';
import { WonderwheelsComponent } from './wonderwheels/wonderwheels.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { WalletComponent } from './wallet/wallet.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { BookcoachComponent } from './bookcoach/bookcoach.component';
import { CoachdetailsComponent } from './coachdetails/coachdetails.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MybookticketsComponent } from './mybooktickets/mybooktickets.component';
import { MybusdetailsComponent } from './mybusdetails/mybusdetails.component';
import { AddEditbusComponent } from './add-editbus/add-editbus.component';

import { RoutesService } from './routes.service';
import { BusDetailsService } from './bus-details.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminloginComponent,
    BookticketsComponent,
    AboutusComponent,
    ContactusComponent,
    SeatselectionComponent,
    BuslistComponent,
    AdmindashboardComponent,
    RouteslistComponent,
    RecordsandprofitsComponent,
    ForgotpasswordComponent,
    AddEditrouteComponent,
    WonderwheelsComponent,
    MydashboardComponent,
    ProfileComponent,
    PaymentComponent,
    WalletComponent,
    FeedbackComponent,
    MybookingsComponent,
    BusdetailsComponent,
    BookcoachComponent,
    CoachdetailsComponent,
    ChangepasswordComponent,
    MybookticketsComponent,
    MybusdetailsComponent,
    AddEditbusComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule, NgbModule
  ],
  providers: [
    RoutesService,
    BusDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }