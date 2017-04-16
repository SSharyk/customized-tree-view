import { Directive, Input } from '@angular/core';
import { RecursiveModel } from './RecursiveModel';

/**
 * Structural directive that passes through the collection and renders it as a tree
 */
@Directive({
    selector: '[forRecursive]'
})
export class ForRecursiveDirective {
    // Model recursion property name
    private property: string;

    // List of input data transformed to the model with level symbol
    private collection: RecursiveModel<any>[];

    /**
     * Property differ setter to detect changes in the model recursion property name
     * 
     * @param prop - A string that sets model recursion property
     */
    @Input()
    set forRecursiveProperty(prop: string) {
        this.property = prop;
    }
    get forRecursiveProperty() {
        return this.property;
    }

    /**
     * Collection differ setter to detect changes in the data
     * 
     * @param coll - List of items need be included to the tree on the specific level
     */
    @Input()
    set forRecursiveOf(coll: any[]) {
        this.collection = [];
        this.flattenData(coll);
        console.log(this.collection)
    }

    /**
    * Converts recursive items to the single list
    * 
    * @param nodes - List of items need be included to the tree on the specific level
    * @param level - Sets the level of items passed as the first parameter
    */
    private flattenData(nodes: any[], level: number = 0) {       
        nodes.forEach((element: any, index: number, array: any[]) => {
            let item = new RecursiveModel(element, level);
            this.collection.push(item);
            if (element[this.forRecursiveProperty] != null && element[this.forRecursiveProperty] != undefined) {
                this.flattenData(element[this.forRecursiveProperty], level + 1);
            }
        });
    }
}