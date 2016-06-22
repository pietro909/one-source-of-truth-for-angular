import { ActionReducer, Action } from '@ngrx/store';
import {CurrentSearch} from "./current-search.model";
import {ProximitySelector} from "../location/proximity-selector.component";

export const locationReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch, action: Action) => {
    console.log(`reduce 2 -> ${action.type}`);
    switch (action.type) {
        case ProximitySelector.StoreEvents.position:
            const update = {
                position: {
                    latitude: action.payload.position.latitude,
                    longitude: action.payload.position.longitude
                }
            };
            return Object.assign({}, state, update);
        case ProximitySelector.StoreEvents.off:
            const update = {
                position: null,
                radius: null
            };
            return Object.assign({}, state, update);
        case ProximitySelector.StoreEvents.radius:
            const update = { radius: action.payload.radius };
            return Object.assign({}, state, update);
         default:
            return state;
    }
};
