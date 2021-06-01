import * as earthquakeService from '../services/earthquakeService';
import { renderHook, act } from '@testing-library/react-hooks';
import { useEarthquakesFetcher } from '../components/hooks/useEartquakeFetcher';

describe('useEarthquakesFetcher', () => {
    let getEarthquakesSpy: jest.SpyInstance;
    beforeEach(() => {
        getEarthquakesSpy = jest.spyOn(earthquakeService, 'getEarthquakes')
    });
        
    test('should set to loading while processing', async () => {
        const { result } = renderHook(() => useEarthquakesFetcher());

        expect(getEarthquakesSpy).toHaveBeenCalledTimes(1);
        expect(result.current.loading).toBe(true);
        expect(result.current.earthquakes).toEqual({});
        expect(result.current.error).toBe(false);
    });
    test('should fetch the earthquakes', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useEarthquakesFetcher()
        );
        await waitForNextUpdate();

        expect(getEarthquakesSpy).toHaveBeenCalledTimes(1);
        expect(result.current.earthquakes).not.toEqual({});
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(false);
    });
});
