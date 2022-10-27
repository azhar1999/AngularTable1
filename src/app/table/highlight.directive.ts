import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '';
 }
// @Input() appHighlight = '';
@HostListener('mouseenter') onMouseEnter() {
  this.highlight('blue','white');
}
@HostListener('mouseleave') onMouseLeave() {
  this.highlight('','');
}
private highlight(backgroundcolor: string,color:String) {
  this.el.nativeElement.style.backgroundColor = backgroundcolor;
  this.el.nativeElement.style.color = color;
}
}
