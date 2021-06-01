import React, { useEffect } from 'react';
import L from 'leaflet';
import { useLeaflet } from 'react-leaflet';
import { markerColor } from '../marker';
import './index.sass';

const InfoLegend: React.FC = () => {
    const { map } = useLeaflet();
    useEffect(() => {
        const legend = new L.Control({ position: 'bottomright' });
        legend.onAdd = () => {
            const div = L.DomUtil.create('div', 'info legend');
            const grades = [0, 1, 2, 3, 5, 7];
            const labels = [];

            labels.push('<h4>Magnitude Color Code</h4>');

            grades.forEach((from, index) => {
                const to = grades[index + 1];
                labels.push(
                    `<i style="background:${markerColor(
                        from + 1
                    )}"></i>${from}${to ? `&ndash;${to}` : '+'}`
                );
            });

            div.innerHTML = labels.join('<br>');

            return div;
        };
        if (map) legend.addTo(map);
    }, [map]);

    return null;
};

export default InfoLegend;
