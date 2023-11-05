import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private loginservice:LoginService){}
  register(){
    let employee = new Employee(0, "thisisname123", "thisisemail1321", "thisispassword", "admin");
    this.loginservice.postEmployee(employee).subscribe(result=>{
      console.log('post success');
      console.log(result);
    },
    error=> {
      console.log("Post Error!", error);
    });
  }
}
