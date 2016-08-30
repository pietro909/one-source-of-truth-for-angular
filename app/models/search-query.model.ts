import {SearchResult} from "./search-result.model";
export interface SearchQuery {
    name: string;
    location?: {
        latitude: number,
        longitude: number,
        radius: number
    },
    results: SearchResult[]
}
