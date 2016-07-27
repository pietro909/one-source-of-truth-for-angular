"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SyncSubject_1 = require('@ngrx/core/SyncSubject');
var Reducer = (function (_super) {
    __extends(Reducer, _super);
    function Reducer(_dispatcher, initialReducer) {
        _super.call(this, initialReducer);
        this._dispatcher = _dispatcher;
    }
    Reducer.prototype.replaceReducer = function (reducer) {
        this.next(reducer);
        this._dispatcher.dispatch({ type: Reducer.REPLACE });
    };
    Reducer.REPLACE = '@ngrx/store/replace-reducer';
    return Reducer;
}(SyncSubject_1.SyncSubject));
exports.Reducer = Reducer;
