import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[my-High-Light]'
})
export class MyHighLightDirective {
  @Input()
  public highLight:string = "";
  constructor(private el: ElementRef) { 
    // this.el.nativeElement.style.backgroundColor = "#f60";
  }
  // public $p = this.el.nativeElement;
  @HostListener('mouseenter') onmouseenter() {
    // this.$p.style.backgroundColor = this.highLight;
    this.doHighLight(this.highLight);
  }

  @HostListener('mouseout') onmouseout() {
    this.doHighLight("");
  }

  public doHighLight(highLight:string):void{
    this.el.nativeElement.style.backgroundColor = highLight;
  }

}
