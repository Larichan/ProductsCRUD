import { Directive } from '@angular/core';

@Directive({
  selector: '[appAttribute]',
  standalone: true
})
export class AttributeDirective {

  constructor() { }

}
