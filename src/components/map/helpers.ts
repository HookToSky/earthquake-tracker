import { Layer } from 'leaflet';
import { EarthquakeProps } from '../../types/EarthquakeProps';

const timeFormatter = (time: number, offset: number): string => {
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
};

export const onEachFeature = (feature: EarthquakeProps, layer: Layer) => {
  const {
      properties: { title, place, time, mag, sig },
      geometry: { coordinates }
  } = feature;

  const content = `
      <h3 style="font-size: 1.17em; font-weight: bold">${title}</h3>
      <b>Time (GMT+2)</b>: ${timeFormatter(time, 2)} <br>
      <b>Place</b>: ${place} <br>
      <b>Lon</b>: ${coordinates[0]} <br>
      <b>Lat</b>: ${coordinates[1]} <br>
      <b>Depth</b>: ${coordinates[2]} km <br>
      <b>Magnitude</b>: ${mag} Richter <br>
      <b>Significance</b>: ${sig} in range [0,1000] <br>
  `;

  layer.bindPopup(content);
};