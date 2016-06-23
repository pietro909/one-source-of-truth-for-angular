import { ActionReducer, Action } from '@ngrx/store';
import {CurrentSearch} from "../models/current-search.model";
import {SearchBox} from "../components/search-box.component";

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
