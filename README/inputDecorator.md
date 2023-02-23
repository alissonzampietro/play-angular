[< Back to home](../README.md)
# Input Decorator

This decorator is used to let angular knows which properties of your class is available to be bindable for parents.

```typescript
import {Input} from '@angular/core';
...
export class Test {
    @Input() myProperty;

}
...
```
## Creating alias
You can create alias if you want to use a different property name. [Example here](../src/app/examples/components/server-element/server-element.component.ts)

```typescript
import {Input} from '@angular/core';
...
export class Test {
    @Input('aliasMyProperty') myProperty;

}
...
```