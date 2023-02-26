import { Component } from '@angular/core';
import { ServerElement } from 'src/app/shared/server-element.interface';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  serverElements: ServerElement[] = [{type: 'server', name: 'Bing Server', content: 'teste test e'}];

  onServerAdded(serverData: ServerElement) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(bluePrintData: ServerElement) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.name,
      content: bluePrintData.content
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed"!
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }

}
