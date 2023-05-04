[< Back to home](../README.md)

# hostChild

HostChild() decorator allows you receive events from the parent component who's implementing the component where the decorator is included.

```html
<div *ngIf="!showOdd">
    <li class="list-group-item" appBetterHighlight *ngFor="let even of evenNumbers">{{even}}</li>
</div>
```

```typescript
import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{

    @HostListener('mouseenter') 
    public mouseOver(data: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ff4343');
    }
```