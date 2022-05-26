import { NgModule } from '@angular/core';
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
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: 'user', component: UserloginComponent },
  { path: 'signup', component: UserformComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
