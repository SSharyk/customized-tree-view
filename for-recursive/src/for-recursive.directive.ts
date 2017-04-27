import { 
    Directive, 
    EmbeddedViewRef,
    Input,
    TemplateRef, 
    ViewContainerRef } from '@angular/core';

export class RecursiveModel<T> {
    constructor(public Entity: T, public Level: number) {
    }
}


/**
 * Structural directive that passes through the collection and renders it as a tree
 */
@Directive({
    selector: '[forRecursive]',
    inputs: ['forRecursiveOf', 'forRecursiveProperty']
})
export class ForRecursiveDirective {
    // Model recursion property name
    private property: string;

    // List of input data transformed to the model with level symbol
    private collection: RecursiveModel<any>[];

    /**
     * Inits the directive
     * @param template - Template reference that used in DOM manipulations
     */
    constructor(private template: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }

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
    }

    /**
    * Converts recursive items to the single list and renders it
    * 
    * @param nodes - List of items need be included to the tree on the specific level
    * @param level - Sets the level of items passed as the first parameter
    */
    private flattenData(nodes: any[], level: number = 0) {       
        nodes.forEach((element: any, index: number, array: any[]) => {
            let item = new RecursiveModel(element, level);
            this.collection.push(item);
            const view = this.viewContainer.createEmbeddedView(this.template);
            view.context.$implicit = item;

            if (element[this.forRecursiveProperty] != null && element[this.forRecursiveProperty] != undefined) {
                this.flattenData(element[this.forRecursiveProperty], level + 1);
            }
        });
    }
}