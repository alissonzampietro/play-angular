[<- Back to home](../README.md)

# Two-way data binding

Binding is the same as **Comunication**. Basically in angular there's two ways of doing bindings to output data:
 - String Interpolation: {{data}}
 - Property binding: [property]="data"

 Also you can input data throught:
  - Event Binding: (event)="expression"

And last but not least:
  - Two-Way-Binding: [(ngModel)]="data"



## String Interpolation
You can see an example of string Interpolation in the template [here](../src/app/server/server.component.html) and in the class [here](../src/app/server/server.component.ts) 
* If you don't use any type of quotation, the value referenced inside the curly braces had to match with the public property set in the class in the TS file. If you use curly braces, if will only show the variable name as string,