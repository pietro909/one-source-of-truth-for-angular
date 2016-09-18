import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {Store, StoreModule} from "@ngrx/store";

import {AppComponent} from "./app.component";

@NgModule({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent, ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
