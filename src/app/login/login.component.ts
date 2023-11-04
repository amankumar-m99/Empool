import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StaticData } from '../static/static-data';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("images/logo.png");

  constructor(private router:Router, private loginService:LoginService){}

  submit(){
    // this.loginService.getCard("13");
    this.router.navigate(['super-dashboard']);
  }
}
