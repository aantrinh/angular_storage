import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  mangNhanVien= [
    {name: "Anh", age: 18},
    {name: "Thu", age: 21},
    {name: "Hieu", age: 30},

  ]

  constructor() { }

  ngOnInit() {
  }

}
