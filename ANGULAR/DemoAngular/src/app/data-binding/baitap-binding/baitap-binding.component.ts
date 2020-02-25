import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-binding',
  templateUrl: './baitap-binding.component.html',
  styleUrls: ['./baitap-binding.component.scss']
})
export class BaitapBindingComponent implements OnInit {
email:string =" abc@cybersoft.com";
name:string = "name";
  constructor() { }

  ngOnInit() {
  }
  
submit(value){
  console.log(value);
  this.name = value;
}
}
