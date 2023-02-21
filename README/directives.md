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


## Built-in directives
Before we jump into the directives, we need to explain why the use of asterisks at the beginning of the directive. The built-in directives works like our custom directives, it means that we need to have it declared in our TS component, and the only one who knows how ngIf, nfFor, ngStyle e so on are implemented is the angular itself. When you put the asterisk in the code you want to say the following:

```html

<p *ngIf="condition">Angular will transform this code...</p>

<ng-template [ngIf]="condition">
    <p>...on this code</p>
</ng-template>
```

The example above shows how [Structural directives](https://angular.io/guide/structural-directives) are implemented. now, let's jump into the directives:

 - ```*ngIf```: conditional directive, that only shows the element where it is inserted, if the condition is *true*. **asterisk is use to tell to interpreter that it's a structure directive that changes the DOM, it's called **. 
    - There is a way where you can create a else in the condition, using the ng-template and placing a local referencing on this directive and put the *else* in the ngIf after the condition. Feel free to choose the reference name, but the rule is: it should start with #. You can see the example in the [TS file](../src/app/servers/servers.component.html)
 - ```*ngStyle```: You can use this directive to add custom CSS according to some logic. You can see the example in the [component logic file](../src/app/server/server.component.ts) and in the [component html](../src/app/server/server.component.ts)
 - ```*ngClass```: You can use this directive to add custom html elements according to some logic. You can see the example in the [component logic file](../src/app/server/server.component.ts) and in the [component html](../src/app/server/server.component.ts). This directive can be used in two ways:
    - The first one is creating a method and this method returns the className that you want.
    - The second option is you use a JSON where the property key is the class that will be used and in the value, you put the condition that expects a boolean.
 - ```*ngFor```: Allows you to loop over a list of elements, as you can [see here](../src/app/servers/servers.component.html).