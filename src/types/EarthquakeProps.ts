export interface EarthquakeProps {
    geometry: any;
    properties: {
        mag: number;
        place: string;
        time: number;
        url: string;
        title: string;
        sig: number;
    };
}
