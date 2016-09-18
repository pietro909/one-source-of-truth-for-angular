"use strict";
var search_box_component_1 = require('../components/search-box.component');
var proximity_selector_component_1 = require('../components/proximity-selector.component');
exports.SearchReducer = function (state, action) {
    switch (action.type) {
        case search_box_component_1.SearchBox.StoreEvents.text:
            return Object.assign({}, state, {
                name: action.payload.text
            });
        case proximity_selector_component_1.ProximitySelector.StoreEvents.position:
            return Object.assign({}, state, {
                location: {
                    latitude: action.payload.position.latitude,
                    longitude: action.payload.position.longitude
                }
            });
        case proximity_selector_component_1.ProximitySelector.StoreEvents.radius:
            return Object.assign({}, state, {
                radius: action.payload.radius
            });
        case proximity_selector_component_1.ProximitySelector.StoreEvents.off:
            return Object.assign({}, state, {
                location: null
            });
        default:
            return state;
    }
};
//# sourceMappingURL=search.reducer.js.map