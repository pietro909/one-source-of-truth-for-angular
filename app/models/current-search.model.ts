export interface CurrentSearch {
    name: string;
    location?: {
        latitude: number,
        longitude: number
    },
    radius: number,
    error?: string
}
