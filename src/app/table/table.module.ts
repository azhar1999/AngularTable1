import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablecompComponent } from './tablecomp/tablecomp.component';
import { HighlightDirective } from './highlight.directive';
import { DoubleClickDirective } from './double-click.directive';



@NgModule({
  declarations: [
    TablecompComponent,
    HighlightDirective,
    DoubleClickDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TablecompComponent
  ]
})
export class TableModule { }
