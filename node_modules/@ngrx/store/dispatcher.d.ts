import { SyncSubject } from '@ngrx/core/SyncSubject';
export interface Action {
    type: string;
    payload?: any;
}
export declare class Dispatcher extends SyncSubject<Action> {
    static INIT: string;
    constructor();
    dispatch(action: Action): void;
    complete(): void;
}
