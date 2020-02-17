import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostProp]'
})
export class HostPropDirective {

  constructor() { }

}
