import { Component } from '@angular/core';
import { ServerElement } from 'src/app/shared/server-element.interface';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  serverElements: ServerElement[] = [{type: 'server', name: 'Bing Server', content: 'teste test e'}];

}
