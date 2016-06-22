import { ActionReducer, Action } from '@ngrx/store';
import {SearchBox} from "../search-box/search-box.component";
import {CurrentSearch} from "./current-search.model";


export const searchReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch, action: Action) => {
    switch (action.type) {
        case SearchBox.StoreEvents.text:
            return Object.assign({}, state, {
                text: action.payload.text
            });
        default:
            return state;
    }
};
