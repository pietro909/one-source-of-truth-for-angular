import { SyncSubject } from '@ngrx/core/SyncSubject';
import { Dispatcher } from './dispatcher';
import { Reducer } from './reducer';
export declare class State<T> extends SyncSubject<T> {
    constructor(_initialState: T, action$: Dispatcher, reducer$: Reducer);
}
