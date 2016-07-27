"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SyncSubject_1 = require('@ngrx/core/SyncSubject');
var select_1 = require('@ngrx/core/operator/select');
var Store = (function (_super) {
    __extends(Store, _super);
    function Store(_dispatcher, _reducer, state$, initialState) {
        var _this = this;
        _super.call(this, initialState);
        this._dispatcher = _dispatcher;
        this._reducer = _reducer;
        this.select = select_1.select.bind(this);
        state$.subscribe(function (state) { return _super.prototype.next.call(_this, state); });
    }
    Store.prototype.replaceReducer = function (reducer) {
        this._reducer.replaceReducer(reducer);
    };
    Store.prototype.dispatch = function (action) {
        this._dispatcher.dispatch(action);
    };
    Store.prototype.next = function (action) {
        this._dispatcher.dispatch(action);
    };
    Store.prototype.error = function (err) {
        this._dispatcher.error(err);
    };
    Store.prototype.complete = function () {
        // noop
    };
    return Store;
}(SyncSubject_1.SyncSubject));
exports.Store = Store;
