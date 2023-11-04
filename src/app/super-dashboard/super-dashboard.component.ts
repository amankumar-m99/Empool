import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-dashboard',
  templateUrl: './super-dashboard.component.html',
  styleUrls: ['./super-dashboard.component.css']
})
export class SuperDashboardComponent {

  constructor(private router:Router){}

  listAllEmployees(){
    this.router.navigate(['super-dashboard/employees']);
  }

  registerNewEmployee(){
    this.router.navigate(['super-dashboard/register']);
  }
}
