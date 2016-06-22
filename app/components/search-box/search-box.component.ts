import {Observable} from "rxjs/Rx";
import {ElementRef, OnInit, Component, Input} from "@angular/core";
import {CurrentSearch} from "../youtube-search/search.reducer";
import {Store} from "@ngrx/store";

@Component({
    inputs: ['store'],
    selector: 'search-box',
    template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
    `
})

export class SearchBox implements OnInit {

    @Input()
    store: Store<any>;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((e: any) => e.target.value)
            .filter((text: string) => text.length > 3 || text.length == 0)
            .debounceTime(250)
            .subscribe((text: string) =>
                this.store.dispatch({
                    type: 'TEXT',
                    payload: {
                        text: text
                    }
                })
            );
    }

}
