import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { BindingValuesComponent } from './binding-values/binding-values.component';
import { FormsModule } from '@angular/forms';
import { BuiltinDirectiveComponent } from './builtin-directive/builtin-directive.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';



@NgModule({
  declarations: [
    ActivitiesComponent,
    BindingValuesComponent,
    BuiltinDirectiveComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
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
