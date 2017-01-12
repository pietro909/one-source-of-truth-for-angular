[![Build Status](https://travis-ci.org/pietro909/one-source-of-truth-for-angular.svg?branch=youtube)](https://travis-ci.org/pietro909/one-source-of-truth-for-angular)
# One Source of Truth for Angular 2

This repository contains the code for the article published on SitePoint [Managing State in Angular 2](https://www.sitepoint.com/managing-state-angular-2-ngrx/)

The components we build for our web-application often host states. Connecting components often means sharing mutable states: this is difficult to manage and leads to inconsistency.

What if we have one place for the state's mutation and let messages do the rest? [ngrx/store](https://github.com/ngrx/store) is an implementation of [Redux](https://github.com/reactjs/redux) for [Angular](https://angular.io/) using [RxJS](http://reactivex.io/rxjs/) that brings this powerful pattern into the Angular world.

This sample application will manage a realtime search using the [YouTube API](https://developers.google.com/youtube/v3/), allowing the user to search for a name and to geo-localize the search results.

Play with the live example here: [live example](https://pietro909.github.io/one-source-of-truth-for-angular/).

## Requirements

* [Node.js](http://nodejs.org/) v5.x.x or higher
* [NPM](https://www.npmjs.com/) 3.x.x or higher

## Installation Steps

1. Clone repo
2. Run `npm install`
3. Run `npm start`
4. Visit http://localhost:3000/

## License

The MIT License (MIT)

Copyright (c) 2016 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
