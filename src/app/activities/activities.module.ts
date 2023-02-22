import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { BindingValuesComponent } from './binding-values/binding-values.component';
import { FormsModule } from '@angular/forms';
import { BuiltinDirectiveComponent } from './builtin-directive/builtin-directive.component';



@NgModule({
  declarations: [
    ActivitiesComponent,
    BindingValuesComponent,
    BuiltinDirectiveComponent
  ],
  exports: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [ActivitiesComponent]
})
export class ActivitiesModule { }
