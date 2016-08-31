import {Component, OnInit} from '@angular/core';
import {Store, provideStore} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import {ProximitySelector} from './components/proximity-selector.component';
import {SearchBox} from './components/search-box.component';
import {SearchReducer} from './reducers/search.reducer';
import {CurrentSearch} from "./models/current-search.model";
import {YouTubeService} from "./services/youtube.service";
import {SearchResult} from "./models/search-result.model";

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
        <div class="row col-md-8">
            <div *ngFor="let result of searchResults" class="thumbnail col-sm-6 col-md-4">
                <div class="caption">
                    <h3>{{ result.title }}</h3>
                </div>
                <!--<img src="{{ result.thumbnailUrl }}" />-->
            </div>
        </div>
    </section>
    `
})

export class AppComponent implements OnInit {

    title = ''; //'One Source of Truth for Angular 2';
    
    private state: CurrentSearch;

    private currentSearch: Observable<CurrentSearch>;
    private searchResults: SearchResult[] = [];

    constructor(
        private store: Store<CurrentSearch>,
        private youtube: YouTubeService
    ) {
        this.currentSearch = this.store.select<CurrentSearch>('currentSearch');
        this.youtube.searchResults.subscribe((results: SearchResult[]) => this.searchResults = results);
    }

    ngOnInit() {
        this.currentSearch.subscribe((state: CurrentSearch) => {
            this.state = state;
            if (state && state.name && state.name.length > 0) {
                this.youtube.search(state)
            } else {
                this.searchResults = [];
            }
        });
    }

}
