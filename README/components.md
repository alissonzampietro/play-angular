[< Back to home](../README.md)
# Components


## Sending data to component (parent -> child)

Let's suppose that we have a component called ```<app-suppose></app-suppose>``` and we need to send properties to this component. Basically you just need to send as [Property binding](./dataBinding.md#property-binding), but **we need to implement a functionality where you should allow parents components binding into it through a decorator called @Input()**. Let's call the property as *supposition*.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-suppose',
  template: `
    <p>Here you can see the property supposition: {{supposition}}</p>
  `
})

export class SupposeComponent {

  @Input() supposition;

  constructor() { }
}

```

Above is the component typescript example, let's check how we would call it:


```html
<app-suppose [supposition]="I suppose its wrong"></app-suppose>
```

If you want to check more examples, you can see the parent [typescrypt components](../src/app/examples/components/components.component.ts#L9-L11) and the [template component](../src/app/examples/components/components.component.html#L6-L8).

## Sending data from component (child -> parent)         


```typescript
//child component
interface ChildInterface {
  property: string
}

export class ChildComponent {
  @Output() childPropertyEvent = new EventEmitter<ChildInterface>();


  actionToExecute() {
    this.childPropertyEvent.emit({property: 'Hello'})
  }
}
```

```html
<!-- child template -->
<button (click)="actionToExecute()">
```

```typescript
// parent component
export class ParentComponent() {
  destination: ChildInterface = ''

  parentEvent(params) {
    destination = params;
  }

}
```

```html
<!-- parent template -->
<app-child-component [paramOutput]="parentEvent($event)"></app-child-component>
```

