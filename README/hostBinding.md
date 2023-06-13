[< Back to home](../README.md)
# Host Binding

`@HostBinding` is a decorator in Angular that allows you to bind a class property to a host element property or attribute. 

When you apply `@HostBinding` to a property in a directive or component class, it lets you dynamically set the value of a host element property or attribute based on the value of that property. This means you can control the behavior and appearance of the host element using the property value.

For example, consider a directive that changes the background color of an element. By using `@HostBinding('style.backgroundColor')`, you can bind a property of the directive class to the `backgroundColor` style property of the host element. Whenever the property value changes, the host element's background color will be updated accordingly.

Here's a short example:

```typescript
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[colorDirective]'
})
export class ColorDirective {
  @Input() color: string;

  @HostBinding('style.backgroundColor') get backgroundColor(): string {
    return this.color;
  }
}
```

In this example, the `color` property is bound to the host element's `backgroundColor` style property. Whenever the `color` property changes, the `backgroundColor` of the host element will be updated accordingly.

Overall, `@HostBinding` provides a convenient way to manipulate host element properties or attributes dynamically based on the state of a directive or component.