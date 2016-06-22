import {Component, OnInit} from '@angular/core';
import {SearchBox} from "./components/search-box/search-box.component";
import {CurrentSearch, searchReducer} from "./components/reducers/search.reducer";
import {Store, provideStore, combineReducers} from "@ngrx/store";
import {Observable} from "rxjs/Rx";
import {locationReducer} from "./components/reducers/location.reducer";
import {ProximitySelector} from "./components/location/proximity-selector.component";

const mainReducer = combineReducers({
    searchByName: searchReducer,
    searchByLocation: locationReducer
});

@Component({
    selector: 'my-app',
    providers: [
        provideStore({ currentSearch: mainReducer })
    ],
    directives: [ SearchBox, ProximitySelector ],
    template: `
    <h1>{{title}}</h1>
    <div class="row">
        <search-box [store]="store"></search-box>
        <proximity-selector [store]="store"></proximity-selector>
    </div>
    <div class="row">
        <courses-list [searchResults]="results"></courses-list>
    </div>
    `

})

export class AppComponent implements OnInit {

    title = 'One Source of Truth for Angular 2';

    private currentSearch: Observable<CurrentSearch>;

    constructor(
        private store: Store<CurrentSearch>
    ) {
        this.currentSearch = this.store.select<CurrentSearch>('currentSearch');
    }

    ngOnInit() {
        this.currentSearch.subscribe((state: CurrentSearch) => {
            console.log(state);
        });
    }

}
