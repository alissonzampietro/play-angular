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

 ## Directive Properties

 Directive properties in Angular enable communication and data exchange between components. Using @Input and @Output decorators, they pass data from parent to child components and allow child components to emit events to the parent component. Directive properties enhance code modularity and enable dynamic rendering and interaction in Angular applications.

 ## Create my own structural directive

 [Structural directive](../src/app/examples/activities/structural-directive/unless.directive.ts) are applied by using the star(*) as prefix, such as *ngIf. Actually, angular converts in a ng-template tag and set is as a regular property bind [ngIf]. You can see its implementation [here](../src/app/examples/activities/structural-directive/unless.directive.ts) and how it will be used in the template [here: you can see the example *appUnless="showOdd"](../src/app/examples/activities/attribute-directive/attribute-directive.component.html). A bit of explatation what actually it's doing:

  - The **@Directive** decorator defines the directive with the selector **[appUnless]**. This means the directive can be applied to elements using the attribute appUnless in the Angular template.
  - The **@Input('appUnless')** decorator sets up an input property named **"appUnless"**. This property allows the directive to receive a boolean value as input, specified by the alias "appUnless".
  - Inside the setter function for the unless property, the provided condition is evaluated. If the condition is false (i.e., !condition), the directive's logic is executed.
  - When the condition is not met, the directive calls **createEmbeddedView(this.templateRef)** on the **ViewContainerRef** instance (vcRef). This method creates an embedded view using the associated **TemplateRef** instance (templateRef), which represents the template content to be rendered. The view is then inserted into the view container, resulting in the rendering of the template content.
  - Conversely, if the condition is true (i.e., the condition is not met), the directive calls **clear()** on the **ViewContainerRef** instance. This method clears any previously created views from the view container, effectively removing the rendered template content.
  - The constructor of the directive receives two dependencies: **TemplateRef<any>** and **ViewContainerRef**. These dependencies are used to access and manipulate the template and view container of the element where the directive is applied.

In summary, the **"UnlessDirective"** provides a way to conditionally render or clear template content based on the value of the provided boolean condition. If the condition is false, the associated template is rendered, and if the condition is true, the template is cleared.

 ## Renderer2
It's a implementation that allows you intercept the DOM and create modifications over it. Check our example [here](../src/app/examples/activities/better-highlight/better.highlight.directive.ts)