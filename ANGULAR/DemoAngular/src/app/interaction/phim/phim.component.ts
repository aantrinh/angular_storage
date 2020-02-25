import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {
  // truyen tu Cha ve con 
  @Input() movie;
  //combo xuat ra Output + EventEmitter 
  @Output() eventLike = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  like() {
    // console.log(this.movie);
    this.eventLike.emit(this.movie);
  }
}
