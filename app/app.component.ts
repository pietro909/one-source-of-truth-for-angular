import {Component, OnInit} from '@angular/core';
import {SearchBox} from "./components/search-box/search-box.component";
import {CurrentSearch, searchReducer} from "./components/youtube-search/search.reducer";
import {Store, provideStore} from "@ngrx/store";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'my-app',
    providers: [
        provideStore({ currentSearch: searchReducer })
    ],
    directives: [ SearchBox ],
    template: `
    <h1>{{title}}</h1>
    <div class="row">
        <search-box [store]="store"></search-box>
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
