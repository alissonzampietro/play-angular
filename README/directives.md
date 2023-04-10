[< Back to home](../README.md)
# Directives

Basically Directives are Instructions in the DOM. Although we've used directives with templates in the [example of components](./componentDecorator.md), we can also use directives without them, for example:

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
    - There is a way where you can create a else in the condition, using the ng-template and placing a local referencing on this directive and put the *else* in the ngIf after the condition. Feel free to choose the reference name, but the rule is: it should start with #. You can see the example in the [TS file](../src/app/examples/servers/servers.component.html)
 - ```*ngStyle```: You can use this directive to add custom CSS according to some logic. You can see the example in the [component logic file](../src/app/examples/server/server.component.ts) and in the [component html](../src/app/examples/server/server.component.ts)
 - ```*ngClass```: You can use this directive to add custom html elements according to some logic. You can see the example in the [component logic file](../src/app/examples/server/server.component.ts) and in the [component html](../src/app/examples/server/server.component.ts). This directive can be used in two ways:
    - The first one is creating a method and this method returns the className that you want.
    - The second option is you use a JSON where the property key is the class that will be used and in the value, you put the condition that expects a boolean.
 - ```*ngFor```: Allows you to loop over a list of elements, as you can [see here](../src/app/examples/servers/servers.component.html).


 ## Attribute Directives vs Structural Directives 

 While attribute directives doesn't change the DOM structure, Structural Directive does. Let's use the ```*ngIf``` as example, when the condition is false, basically the HTML code is removed from the DOM.

 ## Attribute directives

One interesting features that Angular allows you to implement is the attribute directives. Basically, it allows you to attach custom behavior to the DOM throught properties. In our example, we set our directive [here](../src/app/examples/activities/basic-highlight/basic-highlight.directive.ts) and later we called it in the [component attribute-directive (just search the appHighLight attribute)](../src/app/examples/activities/attribute-directive/attribute-directive.component.html).


 ## Renderer2
It's a implementation that allows you intercept the DOM and create modifications over it. Check our example [here](../src/app/examples/activities/better-highlight/better.highlight.directive.ts)