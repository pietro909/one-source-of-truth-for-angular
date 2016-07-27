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
var Rx_1 = require('rxjs/Rx');
var core_1 = require('@angular/core');
var store_1 = require('@ngrx/store');
var SearchBox = (function () {
    function SearchBox(el) {
        this.el = el;
    }
    SearchBox.prototype.ngOnInit = function () {
        var _this = this;
        Rx_1.Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; })
            .debounceTime(500)
            .subscribe(function (text) {
            return _this.store.dispatch({
                type: SearchBox.StoreEvents.text,
                payload: {
                    text: text
                }
            });
        });
    };
    SearchBox.StoreEvents = {
        text: 'SearchBox:TEXT_CHANGED'
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', store_1.Store)
    ], SearchBox.prototype, "store", void 0);
    SearchBox = __decorate([
        core_1.Component({
            inputs: ['store'],
            selector: 'search-box',
            template: "\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;
//# sourceMappingURL=search-box.component.js.map