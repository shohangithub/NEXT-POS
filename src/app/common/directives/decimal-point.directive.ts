import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDecimalPoint]'

})
export class DecimalPointDirective {
  @Input('appDecimalPoint') highlightColor: string = '';
  constructor(private el: ElementRef) {
    // this.highlightColor ='blue';
    // el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor == '' ? 'blue' : this.highlightColor;
    console.log(`${this.highlightColor}`);
  }

}
