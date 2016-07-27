"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var withLatestFrom_1 = require('rxjs/operator/withLatestFrom');
var scan_1 = require('rxjs/operator/scan');
var observeOn_1 = require('rxjs/operator/observeOn');
var queue_1 = require('rxjs/scheduler/queue');
var SyncSubject_1 = require('@ngrx/core/SyncSubject');
var State = (function (_super) {
    __extends(State, _super);
    function State(_initialState, action$, reducer$) {
        var _this = this;
        _super.call(this, _initialState);
        var actionInQueue$ = observeOn_1.observeOn.call(action$, queue_1.queue);
        var actionAndReducer$ = withLatestFrom_1.withLatestFrom.call(actionInQueue$, reducer$);
        var state$ = scan_1.scan.call(actionAndReducer$, function (state, _a) {
            var action = _a[0], reducer = _a[1];
            return reducer(state, action);
        }, _initialState);
        state$.subscribe(function (value) { return _this.next(value); });
    }
    return State;
}(SyncSubject_1.SyncSubject));
exports.State = State;
