import React, { useEffect } from 'react';
import L, { LatLng, GeoJSON } from 'leaflet';
import { useLeaflet } from 'react-leaflet';
import LoadingSpinner from '../loadingSpinner';
import { geojsonMarkerOptions } from '../marker';
import { EarthquakeProps } from '../../types/EarthquakeProps';
import { useEarthquakesFetcher } from './customHooks'
import { onEachFeature } from './helpers';


let geojson: GeoJSON;

const EarthquakeMap: React.FC = () => {
    const [earthquakes, loading] = useEarthquakesFetcher();
    const { map } = useLeaflet();

    useEffect(() => {
        if (map && map.hasLayer(geojson)) map.removeLayer(geojson);

        geojson = L.geoJSON(earthquakes.features, {
            onEachFeature,
            pointToLayer: (feature: EarthquakeProps, latlng: LatLng) => {
                const magnitude = feature.properties.mag;
                return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
            }
        });

        if (map) geojson.addTo(map);
    }, [earthquakes, map]);

    if (loading) return <LoadingSpinner />;

    return null;
};

export default EarthquakeMap;
