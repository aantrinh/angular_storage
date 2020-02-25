import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {

  dkSwitch:string ="green";
  constructor() { }

  ngOnInit() {
  }

  changeColor(value){
    console.log(value);
    this.dkSwitch = value;
  }
}
