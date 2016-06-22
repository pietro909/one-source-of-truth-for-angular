import { ActionReducer, Action } from '@ngrx/store';
import {SearchBox} from "../search-box/search-box.component";
import {CurrentSearch} from "./current-search.model";


export const searchReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch, action: Action) => {
    console.log(`reduce 1 -> ${action.type}`);
    switch (action.type) {
        case SearchBox.StoreEvents.text:
            const update = { text: action.payload.text };
            return Object.assign({}, state, update);
        default:
            return state;
    }
};
