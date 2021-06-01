/* eslint-disable no-nested-ternary */
export const markerColor = (magnitude: number): string => {
  return magnitude <= 1
      ? '#056FF7'
      : magnitude > 1 && magnitude <= 2
      ? '#7D3C98'
      : magnitude > 2 && magnitude <= 3
      ? '#00B800'
      : magnitude > 3 && magnitude <= 5
      ? '#FFCF00'
      : magnitude > 5 && magnitude <= 7
      ? '#FF9000'
      : '#FF0000';
};

export const geojsonMarkerOptions = (magnitude: number): Object => {
  return {
      radius: 2.5 * magnitude,
      fillColor: markerColor(magnitude),
      color: 'grey',
      weight: 0.7,
      opacity: 1,
      fillOpacity: 0.8
  };
};

