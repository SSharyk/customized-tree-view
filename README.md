# TreeView Angular structural directive 
## Summary
_Version_: 0.1.1

_Description_: This is structural Angular directive that gets you syntax sugar to render your model items as a recursive view using your own styles template.

_Usage_: For rendering templates in tree view.

## How to use
#### Install
Type in `npm install customized-tree-view` for your Angular project.

#### Model
Data that should be rendered can have any format. No pre-defined format: you describe all important things yourself.

Note: 
> Model should be recursive. I.e. for model M there is should be property of type M[]. 

#### Use in template
The directive uses syntax template sugar. It is enough to type `*forRecursive="let item of ITEMS; property:'CHILDREN'"`. The code has several important notes:

* `forRecursive` is directive selector
* `ITEMS` is data need be rendered and `item` is iteration variable
* `CHILDREN` is model property that sets the recursion and it passed to directive using `property`

Inside the template, data itself is available using `Entity` property of `item`.

#### Element styles
To stylize elements, use classes `lvl-X` where `X` is level of tree node. It is available using `Level` property of the iteration variable (`item` in previous example).


## Full example
#### Model
`Tree/ItemModel.ts`:

```
export class ItemModel {
    constructor (public Id: number, public Text: string, public Children: ItemModel[]) {
    }
}
```

#### Component
`app.component.ts`

```
import { Component, OnInit } from '@angular/core';
import { ItemModel } from './Tree/ItemModel';
     
@Component({
    selector: 'app',
    templateUrl: '../app/app.component.html',
    styleUrls: ['../app/app.component.css']
})
export class AppComponent implements OnInit { 
    private items: ItemModel[];
    // ... Fill in the collection anyway ...
}
```

#### Layout
`app.component.html`

```
<div *forRecursive="let item of items; property:'Children'" class="lvl-{{item.Level}}">
    <rec-item [item]="item.Entity"> Rec-item here </rec-item>
</div>
```

#### One item component
`Tree/recursive-item.component.ts`

```
import { Component, Input } from '@angular/core';
import { ItemModel } from './ItemModel';

@Component({
    selector: 'rec-item',
    template: `We have: {{item.Id}}:  {{item.Text}}`
})
export class RecursiveItemComponent {
    @Input() item: ItemModel;
}
```

Note:
> The directive should be imported in the module and declared in the `declaration` section of `NgModule` annotation
> "noImplicitAny" in the project's tsconfig.json file should be either not declared (default value) or set to `false`