import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerElement } from 'src/app/shared/server-element.interface';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerElement>();
  @Output('createBlueprint') blueprintCreated = new EventEmitter<ServerElement>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName, 
      content: this.newServerContent
    })
  }

}
