import { render } from '@testing-library/react';
import * as earthquakesFetcher from '../components/hooks/useEartquakeFetcher';
import { fakeEartquakeData } from "../constants/fakeEartquakeData";
import EarthquakeMap from '../components/map';

const mockEmptyObject = {
  earthquakes: {},
  loading: true,
}
const mockFetchedObject = {
  earthquakes: fakeEartquakeData,
  loading: false,
}
const renderMap = () => {
  return render(<EarthquakeMap />);
}
describe("EarthquakeMap Component", () => {
  let earthquakesFetcherSpy: jest.SpyInstance;
  beforeEach(() => {
    earthquakesFetcherSpy = jest.spyOn(earthquakesFetcher, 'useEarthquakesFetcher')
  });
      
  test('should render loading spinner while processing the map', async () => {
    earthquakesFetcherSpy.mockReturnValue(mockEmptyObject);
    const { findByTestId } = renderMap();
    const loadingSpinner = await findByTestId("spinner");

    expect(earthquakesFetcherSpy).toHaveBeenCalledTimes(1);
    expect(loadingSpinner).not.toBeUndefined;
  });
  test('should render the map', async () => {
    earthquakesFetcherSpy.mockReturnValue(mockFetchedObject);
    const { queryByTestId } = renderMap();
    const loadingSpinner = await queryByTestId("spinner");

    expect(earthquakesFetcherSpy).toHaveBeenCalledTimes(1);
    expect(loadingSpinner).toBeNull;
  });
})

