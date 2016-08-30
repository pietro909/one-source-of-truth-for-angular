import {Component, OnInit} from '@angular/core';
import {Store, provideStore} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import {ProximitySelector} from './components/proximity-selector.component';
import {SearchBox} from './components/search-box.component';
import {SearchReducer} from './reducers/search.reducer';
import {SearchQuery} from "./models/search-query.model";

const storeManager = provideStore({ currentSearch: SearchReducer });

@Component({
    selector: 'my-app',
    providers: [ storeManager ],
    directives: [ SearchBox, ProximitySelector ],
    template: `
    <section class="col-md-8">
        <h1>{{title}}</h1>
        <div class="row col-md-8">
            <search-box [store]="store"></search-box>
            <proximity-selector [store]="store"></proximity-selector>
        </div>
        <div class="row col-md-8">
            <p>
                Try to type something in the searchbox, play with the location and with radius: the above state will
                always be consistent and up to date.
            </p>
            <p>{{ state | json }}</p>
        </div>
    </section>
    `
})

export class AppComponent implements OnInit {

    title = 'One Source of Truth for Angular 2';
    
    private state: SearchQuery;

    private currentSearch: Observable<SearchQuery>;

    constructor(
        private store: Store<SearchQuery>
    ) {
        this.currentSearch = this.store.select<SearchQuery>('currentSearch');
    }

    ngOnInit() {
        this.currentSearch.subscribe((state: SearchQuery) => {
            this.state = state;
        });
    }

}
