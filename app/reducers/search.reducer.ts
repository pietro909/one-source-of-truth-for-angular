import { ActionReducer, Action } from '@ngrx/store';
import {CurrentSearch} from "../models/current-search.model";
import {SearchBox} from "../components/search-box.component";
import {ProximitySelector} from "../components/proximity-selector.component";

export const SearchReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch, action: Action) => {
    switch (action.type) {
        case SearchBox.StoreEvents.text:
            return Object.assign({}, state, {
                text: action.payload.text
            });
        case ProximitySelector.StoreEvents.position:
            return Object.assign({}, state, {
                position: {
                    latitude: action.payload.position.latitude,
                    longitude: action.payload.position.longitude
                }
            });
        case ProximitySelector.StoreEvents.radius:
            return Object.assign({}, state, {
                radius: action.payload.radius
            });
        case ProximitySelector.StoreEvents.off:
            return Object.assign({}, state, {
                position: null,
                radius: null
            });
        default:
            return state;
    }
};
