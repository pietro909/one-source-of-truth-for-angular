import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import {CurrentSearch} from "./models/current-search.model";
import {SearchResult} from "./models/search-result.model";
import {YouTubeService} from "./services/youtube.service";

@Component({
    selector: 'my-app',
    template: `
    <section class="col-md-8">
        <h1>{{title}}</h1>
        <div class="row col-md-8">
            <search-box [store]="store"></search-box>
            <proximity-selector [store]="store" [disabled]="disableSearch"
            [ngClass]="{ disabled: disableSearch }"></proximity-selector>
        </div>
        <div class="row col-md-8 alert alert-danger" *ngIf="disableSearch">
            <p>Can't use geolocalization with an empty searchbox</p>
        </div>
        <div class="row col-md-8">
            <p>
            Try to type something in the searchbox, play with the location and with radius: the above state will
            always be consistent and up to date.
            </p>
            <p class="state">{{ state | json }}</p>
            <p class="state" *ngIf="disableSearch">O</p>
        </div>
        <h2 *ngIf="!disableSearch">Search results:</h2>
        <h2 *ngIf="disableSearch || searchResults.length == 0">No results</h2>
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

    title = 'One Source of Truth for Angular 2';

    private state: CurrentSearch;
    private currentSearch: Observable<CurrentSearch>;
    private searchResults: SearchResult[] = [];
    private disableSearch = false;

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
                this.disableSearch = false;
                this.youtube.search(state)
            } else {
                this.disableSearch = true;
                this.searchResults = [];
            }
        });
    }

}
