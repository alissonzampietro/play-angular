[<- Back to home](../README.md)

# NgModule Directive

```typescript
// app.module.ts file
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```



## declarations
Where is set the component that will be used.

## imports
Where is set the modules that will be used.

## providers

## bootstrap
