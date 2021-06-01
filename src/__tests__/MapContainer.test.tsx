import { render } from '@testing-library/react';
import MapContainer from '../components/mapContainer';

const renderMapContainer = () => {
  return render(<MapContainer />);
}
describe("MapContainer Component", () => {
  test('should render the map container', async () => {
    const { findByTestId } = renderMapContainer();
    const mapContainer = await findByTestId("map-container");

    expect(mapContainer).not.toBeUndefined;
  });
})

