import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() ghe;
  @Output() eventGhe = new EventEmitter();
  trangThaiGhe: boolean=false;

  constructor() { }

  ngOnInit() {
  }

  chonGhe(){
    this.trangThaiGhe = !this.trangThaiGhe;

    const objGhe ={
      trangThaiGhe: this.trangThaiGhe,
      ghe: this.ghe
    };

    this.eventGhe.emit(objGhe);
  }

  //day ghe dang chon vao mang 1 mang

}
