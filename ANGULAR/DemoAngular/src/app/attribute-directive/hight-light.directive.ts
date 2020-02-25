import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {

  constructor(private ele: ElementRef, private render2: Renderer2) { 
    // this.ele.nativeElement.style.backgroundColor = "deepskyblue";
    // cach khac 
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'deepskyblue')
  }

  @HostBinding('style.backgroundColor') bgColor: string ="orange";

  @HostListener('mouseenter') suKienHover(){
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'yellow')

  }
  @HostListener('mouseleave') suKienLeave(){
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'deepskyblue')

  }
 
}
