import { Component, Input } from '@angular/core';
import { ItemModel } from './ItemModel';

@Component({
    selector: 'rec-item',
    template: `We have: {{item.Id}}:  {{item.Text}}`
})
export class RecursiveItemComponent {
    @Input() item: ItemModel;
}