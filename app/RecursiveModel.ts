export class RecursiveModel<T> {
    constructor(public Entity: T, public Level: number) {
    }
}