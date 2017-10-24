import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[my-High-Light]'
})
export class MyHighLightDirective {
  @Input()
  public defaulthighLight:string = "";
  @Input('my-High-Light') highLight:string;
  constructor(private el: ElementRef) { 
    // this.el.nativeElement.style.backgroundColor = "#f60";
  }
  @HostListener('mouseenter') onmouseenter() {
    this.doHighLight(this.highLight || this.defaulthighLight || "red");
  }

  @HostListener('mouseout') onmouseout() {
    this.doHighLight("");
  }

  public doHighLight(highLight:string):void{
    this.el.nativeElement.style.backgroundColor = highLight;
  }

}
