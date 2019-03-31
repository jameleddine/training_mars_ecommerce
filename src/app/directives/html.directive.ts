import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHtml]'
})
export class HtmlDirective {

  constructor(private el : ElementRef) {
    console.log('call directive',this.el)
   }

}
