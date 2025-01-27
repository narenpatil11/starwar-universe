import {describe, expect, test, vi, Mock} from 'vitest';
import {useFilms} from './use-films';
import {act, renderHook} from '@testing-library/react';
import {Films, IFilm} from "../utils/swapi.ts";

const mockFilmData: IFilm[] = [
    // @ts-ignore
    {episode_id: '1', title: 'The Phantom Menace'},
    // @ts-ignore
    {episode_id: '2', title: 'Attack of the Clones'},
];
Films.getPage = vi.fn();

describe('useFilms', () => {
    test('should initialize with default states', () => {
        const {result} = renderHook(() => useFilms());
        expect(result.current.films).toBeNull();
        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBeNull();
    });

    test('fetchFilms should set films and stop loading on success', async () => {
        (Films.getPage as Mock).mockResolvedValueOnce({
            results: mockFilmData,
        });
        const {result} = renderHook(() => useFilms());
        await act(async () => {
            // Wait for the initial fetch triggered by useEffect
        });
        expect(result.current.films).toHaveLength(2);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
    });

    test('fetchFilms should set an error message on failure', async () => {
        (Films.getPage as Mock)
            .mockRejectedValueOnce(new Error('Network error'))
            .mockRejectedValueOnce(new Error('Network error'));

        const {result} = renderHook(() => useFilms());

        await act(async () => {
            // Wait for the initial fetch triggered by useEffect
        });

        expect(result.current.films).toBeNull();
        expect(result.current.error).toBe('Network error');
    });

    test('searchFilm should update films based on search text', async () => {

        (Films.getPage as Mock).mockResolvedValueOnce({
            results: [...mockFilmData],
        });

        const {result,} = renderHook(() => useFilms());

        act(() => {
            result.current.setSearchText('Phantom');
        });

        await act(async () => {
            // Wait for searchFilm to complete
        });

        expect(Films.getPage).toHaveBeenCalledWith(1, 'Phantom');
        expect(result.current.films).toEqual([
            {episode_id: '1', title: 'Episode 1 - The Phantom Menace'},
            {episode_id: '2', title: 'Episode 2 - Attack of the Clones'},
        ]);
        expect(result.current.loading).toBe(false);
    });

    test('setFilms manually updates the films state', () => {
        const {result} = renderHook(() => useFilms());

        act(() => {
            result.current.setFilms(mockFilmData);
        });

        expect(result.current.films).toEqual(mockFilmData);
    });
});
