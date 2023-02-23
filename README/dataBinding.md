[<- Back to home](../README.md)

# Data binding

Binding is the same as **Comunication**. Basically in angular there's two ways of doing bindings to output data:
 - String Interpolation: {{data}}
 - [Property binding](../src/app/examples/servers/servers.component.html): [property]="data"
 - [innerText ](../src/app/examples/servers/servers.component.html): <p [property]="data"></p>

 Also you can input data throught:
  - Event Binding: (event)="expression"

And last but not least:
  - Two-Way-Binding: [(ngModel)]="data"



## String Interpolation
You can see an example of string Interpolation in the template [here](../src/app/examples/server/server.component.html) and in the class [here](../src/app/examples/server/server.component.ts) 
* If you don't use any type of quotation, the value referenced inside the curly braces had to match with the public property set in the class in the TS file. If you use curly braces, if will only show the variable name as string.

## Property binding
You can see an example of string Interpolation in the template [here](../src/app/examples/servers/servers.component.html) and the variables of the class [here](../src/app/examples/servers/servers.component.ts). Notice, inside the quotes you can also write typescript code/expressions.



# Event binding
You are able to bind events in the template. You can check in the [servers component](../src/app/examples/servers/servers.component.html) the (click) event. 

## Passing and using data with Event Binding
$event (Dollar Sign Event): See the example in the [servers component file and onUpdateServerName method name](../src/app/examples/servers/servers.component.ts)

## Passing and using data with Two-Way Data Binding
See the example in the [servers component file and serverNameTwoWay property name](../src/app/examples/servers/servers.component.ts)

## Using Local References
Local reference is an alternative to NgModel when you just want to pass data in a One Way. You set the reference in the input on the template and after in the typescript component, you declare the property that you'll be receiving.

```html
<!-- set the #serverNameInput reference in the template file of the component-->
<input 
    type="text" 
    class="form-control"
    #serverNameInput
>

<button
    (click)="onAddServer(serverNameInput)"
>Add Server</button>
```

```typescript
export class Component {
  // declare the value that you're getting in the properties
  onAddServer(input: HTMLInputElement) {
    console.log(input.value)
  }
}
```