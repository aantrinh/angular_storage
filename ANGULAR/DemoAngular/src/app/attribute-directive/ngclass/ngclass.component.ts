import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {
  mauChu: boolean = true;
  fontSize: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
