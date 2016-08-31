export interface SearchQuery {
    name: string;
    location?: {
        latitude: number,
        longitude: number
    },
    radius: number
}
