import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[warning-text]'
})
export class WarningTextDirective {
  @HostBinding("class")
  myClass: string = 'myContent';
  private preText:string = "";
  constructor(private el:ElementRef) { }
  ngAfterContentInit() {
    this.preText = this.el.nativeElement.innerText;
  }
  @HostListener('click') onclick() {
    if(this.myClass == 'myContent') {
      this.myClass = 'warning';
      this.el.nativeElement.innerText = '让你点你就点啊！泰拳警告！！！';
    }else{
      this.myClass = 'myContent';
      this.el.nativeElement.innerText = this.preText;
    }
  }
}
