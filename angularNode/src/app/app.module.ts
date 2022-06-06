import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BillingComponent } from './billing/billing.component';
import { BillingdetailsComponent } from './billingdetails/billingdetails.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { FeedbackreceComponent } from './feedbackrece/feedbackrece.component';
import { BillofuserComponent } from './billofuser/billofuser.component';
import { CommonModule } from '@angular/common';
import { UserviewbillComponent } from './userviewbill/userviewbill.component';
import { HttpCallInterceptorService } from './interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    AdminloginComponent,
    UserloginComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    HomepageComponent,
    DashboardComponent,
    UserdashboardComponent,
    BillingComponent,
    BillingdetailsComponent,
    AdmindashboardComponent,
    FeedbackformComponent,
    FeedbackreceComponent,
    BillofuserComponent,
    UserviewbillComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCallInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
