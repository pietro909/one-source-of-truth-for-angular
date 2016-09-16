"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProximitySelector = (function () {
    function ProximitySelector() {
        this.active = false;
    }
    ProximitySelector.prototype.onLocation = function ($event) {
        var _this = this;
        this.active = $event.target.checked;
        if (this.active) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.store.dispatch({
                    type: ProximitySelector.StoreEvents.position,
                    payload: {
                        position: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        }
                    }
                });
            });
        }
        else {
            this.store.dispatch({
                type: ProximitySelector.StoreEvents.off,
                payload: {}
            });
        }
    };
    ProximitySelector.prototype.onRadius = function ($event) {
        var radius = parseInt($event.target.value, 10);
        this.store.dispatch({
            type: ProximitySelector.StoreEvents.radius,
            payload: {
                radius: radius
            }
        });
    };
    ProximitySelector.StoreEvents = {
        position: 'ProximitySelector:POSITION',
        radius: 'ProximitySelector:RADIUS',
        off: 'ProximitySelector:OFF'
    };
    __decorate([
        core_1.Input()
    ], ProximitySelector.prototype, "store");
    __decorate([
        core_1.Input()
    ], ProximitySelector.prototype, "disabled");
    ProximitySelector = __decorate([
        core_1.Component({
            selector: 'proximity-selector',
            inputs: ['store', 'disabled'],
            template: "\n    <div class=\"input-group\">\n        <label for=\"useLocation\">Use current location</label>\n        <input type=\"checkbox\" \n            [disabled]=\"disabled\"\n            (change)=\"onLocation($event)\">\n    </div>\n    <div class=\"input-group\">\n        <label for=\"locationRadius\">Radius</label>\n        <input type=\"range\" min=\"1\" max=\"100\" value=\"50\"\n            [disabled]=\"!active || disabled\"\n            (change)=\"onRadius($event)\">\n    </div>\n    "
        })
    ], ProximitySelector);
    return ProximitySelector;
}());
exports.ProximitySelector = ProximitySelector;
