import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class RecursiveModel<T> {
    Entity: T;
    Level: number;
    constructor(Entity: T, Level: number);
}
/**
 * Structural directive that passes through the collection and renders it as a tree
 */
export declare class ForRecursiveDirective {
    private template;
    private viewContainer;
    private property;
    private collection;
    /**
     * Inits the directive
     * @param template - Template reference that used in DOM manipulations
     */
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
    /**
     * Property differ setter to detect changes in the model recursion property name
     *
     * @param prop - A string that sets model recursion property
     */
    forRecursiveProperty: string;
    /**
     * Collection differ setter to detect changes in the data
     *
     * @param coll - List of items need be included to the tree on the specific level
     */
    forRecursiveOf: any[];
    /**
    * Converts recursive items to the single list and renders it
    *
    * @param nodes - List of items need be included to the tree on the specific level
    * @param level - Sets the level of items passed as the first parameter
    */
    private flattenData(nodes, level?);
}
