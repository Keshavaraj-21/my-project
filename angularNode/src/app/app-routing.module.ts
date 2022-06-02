import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserformComponent } from './userform/userform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BillingComponent } from './billing/billing.component';
import { BillingdetailsComponent } from './billingdetails/billingdetails.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BillgeneratorComponent } from './billgenerator/billgenerator.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { FeedbackreceComponent } from './feedbackrece/feedbackrece.component';
import { BillofuserComponent } from './billofuser/billofuser.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: 'user', component: UserloginComponent },
  { path: 'signup', component: UserformComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'billingdetails', component: BillingdetailsComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'billgenerator', component: BillgeneratorComponent },
  { path: 'feedback', component: FeedbackformComponent },
  { path: 'receivefeedback', component: FeedbackreceComponent },
  { path: 'userbill', component: BillofuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
