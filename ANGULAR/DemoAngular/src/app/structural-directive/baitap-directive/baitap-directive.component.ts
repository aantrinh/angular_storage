import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-directive',
  templateUrl: './baitap-directive.component.html',
  styleUrls: ['./baitap-directive.component.scss']
})
export class BaitapDirectiveComponent implements OnInit {
  isLogin: boolean = false;
  fullname: string = "";

  constructor() { }

  // lifeCirle trong angular
  ngOnInit() {
    console.log("ngOnInit123");
    if (localStorage.getItem("user")) {
      this.isLogin = true;
      this.fullname = JSON.parse(localStorage.getItem("user"));
    }
  }
  login(username, password) {
    console.log(123);
    if (username === "cybersoft" && password === "cybersoft") {
      console.log("login success");
      this.isLogin = true;
      this.fullname = username;

      // luu xuong localStorage
      localStorage.setItem("user", JSON.stringify(username));
    }
  }
}
