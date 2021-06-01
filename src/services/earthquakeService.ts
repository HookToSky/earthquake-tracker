import httpService from '../common/httpService';

export const getEarthquakes = async () => {
    try {
        const response = await httpService.get(
            '/earthquakes/feed/v1.0/summary/all_day.geojson'
        );
        const { data } = response;

        return data;
    } catch (error) {
        console.log('There was an error while getting the earthquakes', error);

        return false;
    }
};
