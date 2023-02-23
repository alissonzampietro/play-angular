import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ServerElement } from 'src/app/shared/server-element.interface';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerElement>();
  @Output('createBlueprint') blueprintCreated = new EventEmitter<ServerElement>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true})
  serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // name: this.newServerName,
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // name: this.newServerName,
      name: nameInput.value, 
      content: this.serverContentInput.nativeElement.value
    })
  }

}
