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

  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value, 
      content: this.newServerContent
    })
  }

}
