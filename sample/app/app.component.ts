import { Component, OnInit } from '@angular/core';
import { ItemModel } from './Tree/ItemModel';
import { RecursiveItemComponent } from './Tree/recursive-item.component';
import { ForRecursiveDirective, RecursiveModel } from 'customized-tree-view';
     
@Component({
    selector: 'app',
    templateUrl: '../app/app.component.html',
    styleUrls: ['../app/app.component.css']
})
export class AppComponent implements OnInit { 
    private items: ItemModel[];

    ngOnInit() {
        let it11 = new ItemModel(1, "1.1", []);
        let it12 = new ItemModel(2, "1.2", []);
        let it1 = new ItemModel(3, "1", [it11, it12]);

        let it2 = new ItemModel(4, "2", []);
        
        let it31 = new ItemModel(5, "3.1", [])
        let it32 = new ItemModel(6, "3.2", [])
        let it33 = new ItemModel(7, "3.3", [])
        let it3 = new ItemModel(8, "3", [it31, it32, it33]);
        this.items = [it1, it2, it3]; 
    }
}