export class ItemModel {
    constructor (public Id: number, public Text: string, public Children: ItemModel[]) {
    }
}