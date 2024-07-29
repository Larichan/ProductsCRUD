import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]',
  standalone: true
})
export class StructuralDirective implements OnInit {

  @Input("appStructuralIn")
  numbers: number[] = [];

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }
  
  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, {$implicit: number})
    }
  }

}
