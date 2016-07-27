import { SyncSubject } from '@ngrx/core/SyncSubject';
import { SelectSignature } from '@ngrx/core/operator/select';
import { Dispatcher, Action } from './dispatcher';
import { State } from './state';
import { Reducer, ActionReducer } from './reducer';
export declare class Store<T> extends SyncSubject<T> {
    private _dispatcher;
    private _reducer;
    constructor(_dispatcher: Dispatcher, _reducer: Reducer, state$: State<T>, initialState: T);
    select: SelectSignature<T>;
    replaceReducer(reducer: ActionReducer<any>): void;
    dispatch(action: Action): void;
    next(action: any): void;
    error(err: any): void;
    complete(): void;
}
