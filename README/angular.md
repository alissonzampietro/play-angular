[< Back to home](../README.md)

# Angular Structure

## Lifecycle

Angular provides a set of hooks functions that allows you get more control over its lifecycle. Let's see which they are:

### ngOnChanges()
Called after a bound input property changes.

### ngOnInit()
Called once the component is initialized

### ngDoCheck()
Calling during every change detection run

### ngAfterContentInit()
Called after content (ng-content) has been projected into view

### ngAfterContentChecked()
Called every time the projected content has been checked.

### ngAfterViewinit()
Called after the component's view (and child views) has been initialized

### ngAfterViewChecked()
Called every time the view (and child views) have been checked
