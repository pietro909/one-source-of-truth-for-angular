import { SyncSubject } from '@ngrx/core/SyncSubject';
import { Dispatcher, Action } from './dispatcher';
export interface ActionReducer<T> {
    (state: T, action: Action): T;
}
export declare class Reducer extends SyncSubject<ActionReducer<any>> {
    private _dispatcher;
    static REPLACE: string;
    constructor(_dispatcher: Dispatcher, initialReducer: ActionReducer<any>);
    replaceReducer(reducer: ActionReducer<any>): void;
}
