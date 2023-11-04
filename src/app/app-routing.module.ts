import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'super-dashboard', component:SuperDashboardComponent, children:[
    {path:'employees', component:EmployeeTableComponent},
    {path:'register', component:RegisterComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
