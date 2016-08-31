"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var youtube_service_1 = require("./services/youtube.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    youtube_service_1.YouTubeService
]);
//# sourceMappingURL=main.js.map