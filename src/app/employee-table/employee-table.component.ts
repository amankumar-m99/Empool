import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
  employeeArr?:Employee[];
  constructor(private loginservice:LoginService){
  }
  ngOnInit(){
    // this.employeeArr = [new Employee(1,'thisisname', 'thisisemail', 'thisispassword', 'standard')];
    this.employeeArr = [];
    this.loginservice.getEmployees().subscribe(result=>{
      this.employeeArr = result;
    }, error=>{
      console.log(error);
    });
  }
}
