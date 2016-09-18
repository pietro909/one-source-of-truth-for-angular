import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {Store, StoreModule} from "@ngrx/store";
import {SearchReducer} from "./reducers/search.reducer";
import {YouTubeService} from "./services/youtube.service";
import {HttpModule} from "@angular/http";
import {SearchBox} from "./components/search-box.component";
import {ProximitySelector} from "./components/proximity-selector.component";

const storeManager = StoreModule.provideStore ({ currentSearch: SearchReducer });

@NgModule({
    imports:      [ BrowserModule, StoreModule, storeManager, HttpModule ],
    declarations: [ AppComponent, SearchBox, ProximitySelector ],
    bootstrap:    [ AppComponent ],
    providers:    [ YouTubeService ]
})
export class AppModule { }
