[< Back to home](../README.md)

# Component Decorator

You can create as many components as you want and nest them inside each other.


## How to create a component?

```typescript
// app.component.ts file
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  styles: `
    h1 {
      color: blue;
    }
  `
})
export class AppComponent {
  name = 'angular-project';
}
```

## selector
Here's where you set the tag that will be replaced by the template of the component. If the above example, the selector is app-root, it means that if you want to call this component inside another component you just need to put this in the HTML component file: 
```html 
<app-root></app-root> 
```
Also, you can use this selector in many ways:
 - If you use brackets, you set the selector as attribute, it means that you component will be injected in some attribute. [Here](../src/app/examples/attribute-selectors.component.ts#4) you can see how this type of component is set and [here](../src/app/examples/examples.component.html) you can see its use

## template
you can type the code inline in the ts file

## templateUrl
It's where we set the location of the template of this component. If you use the backtick character (``) you can put the code inline

## styleUrls
Location of the stylesheet that will be used to style the associated template.

## styles
You can set inline style to the component. Remember **styles** has priority over **styleUrls**, if you write css for a element in both properties, styles will have the priority.