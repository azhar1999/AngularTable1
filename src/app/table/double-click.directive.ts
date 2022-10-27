import { Directive, OnDestroy,HostListener,EventEmitter,Output } from '@angular/core';
import { Subject } from "rxjs";
import { debounceTime, buffer, filter, map } from "rxjs/operators";


@Directive({
  selector: '[appDoubleClick]'
})
export class DoubleClickDirective implements OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  // hello(value:string){
    
  //   var g = document.getElementById(value) as HTMLInputElement
  //   var f ="";
  //   f=`${g.id}`
  //   // console.log(f);
  //   g.innerHTML=`<td id=${f}><input type="text" id="fname" name="fname"> <button class="button">Button</button></td>`
  // }



}
