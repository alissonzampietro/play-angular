[< Back to home](../README.md)

# ViewChild

With ViewChild() decorator, you can access straight without using models.

```html
<input 
    type="text" 
    class="form-control"
    #serverContentInput
>
<button (click)="showElementInTheConsole()">Show</button>
```

```typescript
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit-component',
})


export class CockpitComponent implements OnInit {
  @ViewChild('serverContentInput', {static: true})
  serverContentInput: ElementRef;


  showElementInTheConsole() {
    console.log(this.serverContentInput.nativeElement.value)
  }
}
```