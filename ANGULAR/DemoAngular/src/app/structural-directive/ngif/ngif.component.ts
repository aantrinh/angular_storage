import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
status: boolean= true;

  constructor() { }

  ngOnInit() {
  }

show(){
  this.status = true;
};

hide(){
this.status = false;
};

toggle(){
  this.status = !this.status;
}
}
