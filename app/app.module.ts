import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ForRecursiveDirective } from './for-recursive.directive';
import { RecursiveItemComponent } from './Tree/recursive-item.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ForRecursiveDirective, RecursiveItemComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }