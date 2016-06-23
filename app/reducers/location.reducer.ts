import { ActionReducer, Action } from '@ngrx/store';
import {CurrentSearch} from "../models/current-search.model";
import {ProximitySelector} from "../components/proximity-selector.component";

export const locationReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch, action: Action) => {
    switch (action.type) {
        case ProximitySelector.StoreEvents.position:
            return Object.assign({}, state, {
                position: {
                    latitude: action.payload.position.latitude,
                    longitude: action.payload.position.longitude
                }
            });
        case ProximitySelector.StoreEvents.off:
            return Object.assign({}, state, {
                position: null,
                radius: null
            });
        case ProximitySelector.StoreEvents.radius:
            return Object.assign({}, state, {
                radius: action.payload.radius
            });
         default:
            return state;
    }
};
