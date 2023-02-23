[< Back to home](../README.md)

# Modules

Angular has its own modularity system called **NgModules**. It's main goal is create a cohesive block of code, that allows you to split your application according to the domain that you want o build. In the NgModules decorator you can have imports, exports, providers and set the bootstrap of the module. Below you can see an example of the app.module.ts file. [If you want to know more details about the NgModule directive, access here](./ngModulesDirective.md)

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
