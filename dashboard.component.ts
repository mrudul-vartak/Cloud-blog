import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  UserType: any;
  userstatus: any;
  constructor(private router: Router, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    });

  }



  ngOnInit(): void {
    this.userstatus = localStorage.getItem("isUserLoggedin")

    if (this.userstatus === 'true') {
      console.log('Hi');
      localStorage.setItem("UserType", "Blogger");
    }
    this.UserType = localStorage.getItem("UserType");
    console.log(this.UserType)
  }

  createBlog(): void {
    this.router.navigate(["create-blog"])
  }
}