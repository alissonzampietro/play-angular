[<- Back to home](../README.md)

# Modules

Angular has its own modularity system called **NgModules**. It's main goal is create a cohesive block of code, that allows you to split your application according to the domain that you want o build. In the NgModules decorator you can have imports, exports, providers and set the bootstrap of the module.

`typescript
import { NgModule } from '@angular/core';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
`
