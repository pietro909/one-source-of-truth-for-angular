import {Observable, BehaviorSubject} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Response, Http} from '@angular/http';
import {SearchResult} from '../models/search-result.model';
import {SearchQuery} from '../models/search-query.model';

const YOUTUBE_API_KEY = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
const LOCATION_TEMPLATE = 'location={latitude},{longitude}&locationRadius={radius}km';


@Injectable()
export class YouTubeService {

    searchResults: BehaviorSubject<SearchResult[]> = new BehaviorSubject<SearchResult[]>([]);

    constructor( private http: Http ) {}
    
    search(query: SearchQuery): Observable<SearchResult[]>  {
        let params = [
            `q=${query.name}`,
            `key=${YOUTUBE_API_KEY}`,
            `part=snippet`,
            `type=video`,
            `maxResults=50`
        ];
        
        if (query.location) {
            const radius = query.radius ? query.radius : 50;
            const location =
                LOCATION_TEMPLATE
                    .replace(/\{latitude\}/g, query.location.latitude.toString())
                    .replace(/\{longitude\}/g, query.location.longitude.toString())
                    .replace(/\{radius\}/g, radius.toString());
            params.push(location);
        }
        
        const queryUrl: string = `${YOUTUBE_API_URL}?${params.join('&')}`;

        console.log(queryUrl);
        
        this.http.get(queryUrl)
            .map((response: Response) => {
                console.log(response);
                return <any>response.json().items.map(item => {
                    return {
                        id: item.id.videoId,
                        title: item.snippet.title,
                        thumbnailUrl: item.snippet.thumbnails.high.url
                    };
                });
            })
            .subscribe((results: SearchResult[]) => this.searchResults.next(results));

        return this.searchResults;
    }

}
