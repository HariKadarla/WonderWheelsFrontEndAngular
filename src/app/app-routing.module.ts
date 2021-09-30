import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [

  {
    path: "",
    component: WonderwheelsComponent
  },
  {
    path: "add-editroute",
    component: AddEditrouteComponent
  },
  {
    path: "wonderwheels",
    component: WonderwheelsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forgotpassword",
    component: ForgotpasswordComponent
  },
  {
    path: "aboutus",
    component: AboutusComponent
  },
  {
    path: "contactus",
    component: ContactusComponent
  },
  {
    path: "booktickets",
    component: BookticketsComponent
  },
  {
    path: "adminlogin",
    component: AdminloginComponent
  },
  {
    path: "buslist",
    component: BuslistComponent
  },
  {
    path: "admindashboard",
    component: AdmindashboardComponent
  },
  {
    path: "routeslist",
    component: RouteslistComponent
  },
  {
    path: "recordsandprofits",
    component: RecordsandprofitsComponent
  },
  {
    path: "mydashboard",
    component: MydashboardComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "wallet",
    component: WalletComponent
  },
  {
    path: "payment",
    component: PaymentComponent
  },
  {
    path: "mybookings",
    component: MybookingsComponent
  },
  {
    path: "feedback",
    component: FeedbackComponent
  },
  {
    path: "busdetails",
    component: BusdetailsComponent
  },
  {
    path: "bookcoach",
    component: BookcoachComponent
  },
  {
    path: "coachdetails",
    component: CoachdetailsComponent
  },
  {
    path: "seatselection",
    component: SeatselectionComponent
  },
  {
    path: "changepassword",
    component: ChangepasswordComponent
  },
  {
    path: "mybooktickets",
    component: MybookticketsComponent
  },
  {
    path: "mybusdetails",
    component: MybusdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }