import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
    selector: 'my-app',
    template: `
    <section class="col-md-8">
        <h1>{{title}}</h1>
        <div class="row col-md-8">
            <!-- put searchbox and proximity selector here -->
        </div>
        <div class="row col-md-8">
            <!-- put the state here -->
        </div>
    </section>
    `
})
export class AppComponent implements OnInit {

    title = 'One Source of Truth for Angular 2';

    constructor(
        // inject store and youtube service
    ) {
        // select the state here
    }

    ngOnInit() {
        // handle here the state's update
    }

}
