import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  UserType: string = "Guest"
  ngOnInit(): void {
    if (!localStorage.getItem('isUserLoggedin')) {
      localStorage.setItem("UserType", this.UserType);
      localStorage.setItem("isUserLoggedin", "false");
    }
  }
}
