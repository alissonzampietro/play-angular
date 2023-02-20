[<- Back to home](../README.md)

# Data binding

Binding is the same as **Comunication**. Basically in angular there's two ways of doing bindings to output data:
 - String Interpolation: {{data}}
 - [Property binding](../src/app/servers/servers.component.html): [property]="data"
 - [innerText ](../src/app/servers/servers.component.html): <p [property]="data"></p>

 Also you can input data throught:
  - Event Binding: (event)="expression"

And last but not least:
  - Two-Way-Binding: [(ngModel)]="data"



## String Interpolation
You can see an example of string Interpolation in the template [here](../src/app/server/server.component.html) and in the class [here](../src/app/server/server.component.ts) 
* If you don't use any type of quotation, the value referenced inside the curly braces had to match with the public property set in the class in the TS file. If you use curly braces, if will only show the variable name as string.

## Property binding
You can see an example of string Interpolation in the template [here](../src/app/servers/servers.component.html) and the variables of the class [here](../src/app/servers/servers.component.ts). Notice, inside the quotes you can also write typescript code/expressions.



# Event binding
You are able to bind events in the template. You can check in the [servers component](../src/app/servers/servers.component.html) the (click) event. 

## Passing and using data with Event Binding
$event (Dollar Sign Event): See the example in the [servers component file and onUpdateServerName method name](../src/app/servers/servers.component.ts)

## Passing and using data with Two-Way Data Binding
See the example in the [servers component file and serverNameTwoWay property name](../src/app/servers/servers.component.ts)