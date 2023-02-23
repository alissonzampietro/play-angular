import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesModule } from './activities/activities.module';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { ClassSelectorsComponent } from './class-selectors.component';
import { AttributeSelectorsComponent } from './attribute-selectors.component';
import { ExamplesComponent } from './examples.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsComponent } from './components/components.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component';



@NgModule({
  declarations: [
    ServerComponent,
    ServersComponent,
    ExamplesComponent,
    ClassSelectorsComponent,
    AttributeSelectorsComponent,
    ComponentsComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  exports: [
    ServerComponent,
    ServersComponent,
    ExamplesComponent,
    ActivitiesComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ActivitiesModule
  ]
})
export class ExamplesModule { }
