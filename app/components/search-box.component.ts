import {Observable} from 'rxjs/Rx';
import {ElementRef, OnInit, Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
    selector: 'search-box',
    template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
    `
})

export class SearchBox implements OnInit {

    static StoreEvents = {
        text: 'SearchBox:TEXT_CHANGED'
    };

    @Input()
    store: Store<any>;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((e: any) => e.target.value)
            .debounceTime(500)
            .subscribe((text: string) =>
                this.store.dispatch({
                    type: SearchBox.StoreEvents.text,
                    payload: {
                        text: text
                    }
                })
            );
    }

}
