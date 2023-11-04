import { Component } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
  employeeArr:Employee[];
  constructor(){
    this.employeeArr = [new Employee(1,'emp-1', 'name', 'email.com', 'pass', 'standard')];
  }
}
