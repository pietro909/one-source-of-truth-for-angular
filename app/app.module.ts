import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {Store, StoreModule} from "@ngrx/store";
import {SearchReducer} from "./reducers/search.reducer";

const storeManager = StoreModule.provideStore ({ currentSearch: SearchReducer });

@NgModule({
    imports:      [ BrowserModule, StoreModule, storeManager ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    // providers:    [ storeManager ]
})
export class AppModule { }
