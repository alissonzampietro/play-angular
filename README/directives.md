# Directives

Basically Directives are Instructions in the DOM. Although we've used directives with templates in the [example of components](./componentDirective.md), we can also use directives without them, for example:

```html
<p appTurnGreen>Receives a green background!</p>
```

```typescript
@Directive({
    selector: '[appTurnGreen]'
})

export class TurnGreenDirective {
    // here goes the logic to turn the background green
}
```

The ```appTurnGreen``` is just the selector of the directive TurnGreenDirective.


## Builtin directives

 - ```*ngIf```: conditional directive, that only shows the element where it is inserted, if the condition is *true*. **star is use to tell to interpreter that it's a structure directive that changes the DOM**