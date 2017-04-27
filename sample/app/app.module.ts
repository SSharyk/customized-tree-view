import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ForRecursiveDirective } from 'customized-tree-view';
import { RecursiveItemComponent } from './Tree/recursive-item.component';
import { ItemModel } from './Tree/ItemModel';
import { AppComponent }   from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ForRecursiveDirective, RecursiveItemComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }