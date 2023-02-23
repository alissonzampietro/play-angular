[<- Back to home](../README.md)

# ViewChild

With ViewChild() decorator, you can access straight without using models.

```html
<input 
    type="text" 
    class="form-control"
    #serverContentInput
>
```

```typescript
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

export class CockpitComponent implements OnInit {
  @ViewChild('serverContentInput', {static: true})
  serverContentInput: ElementRef;
}
```