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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require("./app.component");
var store_1 = require("@ngrx/store");
var search_reducer_1 = require("./reducers/search.reducer");
var youtube_service_1 = require("./services/youtube.service");
var http_1 = require("@angular/http");
var search_box_component_1 = require("./components/search-box.component");
var proximity_selector_component_1 = require("./components/proximity-selector.component");
var storeManager = store_1.StoreModule.provideStore({ currentSearch: search_reducer_1.SearchReducer });
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, store_1.StoreModule, storeManager, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, search_box_component_1.SearchBox, proximity_selector_component_1.ProximitySelector],
            bootstrap: [app_component_1.AppComponent],
            providers: [youtube_service_1.YouTubeService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map