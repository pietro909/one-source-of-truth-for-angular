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
var http_1 = require('@angular/http');
var YOUTUBE_API_KEY = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
var YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
var LOCATION_TEMPLATE = 'location={latitude},{longitude}&locationRadius={radius}km';
var YouTubeService = (function () {
    function YouTubeService(http) {
        this.http = http;
        this.searchResults = new Rx_1.BehaviorSubject([]);
    }
    YouTubeService.prototype.search = function (query) {
        var _this = this;
        var params = [
            ("q=" + query.name),
            ("key=" + YOUTUBE_API_KEY),
            "part=snippet",
            "type=video",
            "maxResults=50"
        ];
        if (query.location) {
            var radius = query.radius ? query.radius : 50;
            var location_1 = LOCATION_TEMPLATE
                .replace(/\{latitude\}/g, query.location.latitude.toString())
                .replace(/\{longitude\}/g, query.location.longitude.toString())
                .replace(/\{radius\}/g, radius.toString());
            params.push(location_1);
        }
        var queryUrl = YOUTUBE_API_URL + "?" + params.join('&');
        console.log(queryUrl);
        this.http.get(queryUrl)
            .map(function (response) {
            console.log(response);
            return response.json().items.map(function (item) {
                return {
                    id: item.id.videoId,
                    title: item.snippet.title,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                };
            });
        })
            .subscribe(function (results) { return _this.searchResults.next(results); });
        return this.searchResults;
    };
    YouTubeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], YouTubeService);
    return YouTubeService;
}());
exports.YouTubeService = YouTubeService;
//# sourceMappingURL=youtube.service.js.map