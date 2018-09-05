import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBoolean]',
})
export class BooleanDirective {
  private element: ElementRef
  @Input() status: boolean;

  constructor(private e: ElementRef) {
    this.element = e;
   }

   ngOnInit(): void {
     let right_or_wrong = '';
     if(this.status) {
      right_or_wrong = "<span>(✔)</span>";
     } else {
      right_or_wrong = "<span>(x)</span>";
     }
    this.element.nativeElement.innerHTML = right_or_wrong;
   }

}
