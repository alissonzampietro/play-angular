import { AttributeSelectorsComponent } from './attribute-selectors.component';
import { ExamplesComponent } from './examples.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ExamplesComponent,
    AttributeSelectorsComponent
  ],
  exports: [
    ExamplesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExamplesModule { }
