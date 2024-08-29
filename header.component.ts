import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
userStatus:any;
UserType:any
  constructor(private router: Router) { }

  ngOnInit(): void {
   this.userStatus= localStorage.getItem("isUserLoggedin");
   this.UserType= localStorage.getItem("UserType");
   console.log(this.userStatus);
  }
  
  onLogout(): void {
    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId
    };
    let userPool = new CognitoUserPool(poolData);
    let cognitoUser = userPool.getCurrentUser();
    cognitoUser?.signOut();
    localStorage.clear();
    this.router.navigate(["dashboard"]).then(() => {
      window.location.reload();
      
      });
    // localStorage.setItem("isUserLoggedin","false");
    
  }
}
