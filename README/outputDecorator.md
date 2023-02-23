[< Back to home](../README.md)
# Output decorator
 
That's the decorator that together with the EventEmitter, allows the child send data to parent. Let's see step by step how implement this using the real examples:

1) [Set the variables **serverCreated** and **blueprintCreated** as doorway that can travel com child to parent component](../src/app/examples/components/cockpit/cockpit.component.ts#L9-L12).
2) [Set the methods **onAddServer** and **onAddBlueprint**](../src/app/examples/components/cockpit/cockpit.component.ts#L19-L33) that will be [called by the cockpit template]((../src/app/examples/components/cockpit/cockpit.component.html#L11-L17))
3) [Set the methods called by the children in the parent component.](../src/app/examples/components/components.component.ts#L12-L26) and [effectively declare them in the children component on the template](../src/app/examples/components/components.component.html#L3-L6).


## Creating alias
Like the [input decorator](./inputDecorator.md#creating-alias) you can also create alias. [Check this out](../src/app/examples/components/cockpit/cockpit.component.ts#L11) in the **blueprintCreated** property.
