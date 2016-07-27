"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var store_1 = require('@ngrx/store');
var proximity_selector_component_1 = require('./components/proximity-selector.component');
var search_box_component_1 = require('./components/search-box.component');
var search_reducer_1 = require('./reducers/search.reducer');
var storeManager = store_1.provideStore({ currentSearch: search_reducer_1.SearchReducer });
var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'One Source of Truth for Angular 2';
        this.currentSearch = this.store.select('currentSearch');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentSearch.subscribe(function (state) {
            _this.state = state;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [storeManager],
            directives: [search_box_component_1.SearchBox, proximity_selector_component_1.ProximitySelector],
            template: "\n    <section class=\"col-md-8\">\n        <h1>{{title}}</h1>\n        <div class=\"row col-md-8\">\n            <search-box [store]=\"store\"></search-box>\n            <proximity-selector [store]=\"store\"></proximity-selector>\n        </div>\n        <div class=\"row col-md-8\">\n            <p>\n                Try to type something in the searchbox, play with the location and with radius: the above state will\n                always be consistent and up to date.\n            </p>\n            <p>{{ state | json }}</p>\n        </div>\n    </section>\n    "
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map