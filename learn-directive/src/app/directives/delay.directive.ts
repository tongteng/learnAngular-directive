import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appdelay]'
})
export class DelayDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { 
  }
  @Input() set appdelay(time: number) {
    setTimeout(() => {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
}

}
