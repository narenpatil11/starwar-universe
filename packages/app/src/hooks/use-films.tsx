import {useState, useEffect} from 'react';
import {Films, IFilm} from '../utils/swapi.ts';

export interface IUseFilms {
    films: IFilm[] | null;  // The film data or null if not loaded
    loading: boolean;       // Whether the data is currently being fetched
    error: string | null;   // An error message, if fetching fails
    setSearchText: (value: string) => void;
    setFilms: (value: IFilm[]) => void;
}

/**
 * A hook for managing film-related state and operations such as fetching and searching films.
 *
 * @function useFilms
 * @returns {IUseFilms} An object containing the film data, loading state, error state, and necessary setters.
 *
 * @property {IFilm[] | null} films - The list of films fetched or searched. Initially null.
 * @property {boolean} loading - Boolean indicator of whether film data is currently being loaded.
 * @property {string | null} error - An error message if an error occurred during fetching or search operations. Initially null.
 * @property {Function} setSearchText - A function to set the current search text. When updated, triggers a new film fetch or search.
 * @property {Function} setFilms - A function to manually set the list of films.
 */
export const useFilms = (): IUseFilms => {
    const [films, setFilms] = useState<IFilm[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchText, setSearchText] = useState<string>('');

    /**
     * Asynchronous function to fetch a list of films from the `Films.getPage()` method.
     * Processes the fetched data by transforming the results and updates the state with the films data.
     * Handles and sets errors in case of a failure.
     *
     * @async
     * @function fetchFilms
     * @throws Will set an error message if the film fetching process fails.
     */
    const fetchFilms = async () => {
        try {
            const data = await Films.getPage();
            const transformedFilms = data?.results.map((episode: IFilm) => ({
                ...episode,
            }));
            setFilms(transformedFilms || []);
            setLoading(false);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch films');
        }
    };

    /**
     * Asynchronously searches for films based on the provided search text and processes the results.
     *
     * This function retrieves films from the specified data source by invoking the `getPage` method
     * on the `Films` object using a search query. It transforms the results by appending episode
     * information to the film titles and updates the state with the transformed film data. If an error
     * occurs during the fetch operation, an error message is set.
     *
     * @param {string} searchText - The text to search for in film titles.
     * @returns {Promise<void>} A promise that resolves once the search and processing are completed.
     * @throws Will set an error message if the film data fetching fails.
     */
    const searchFilm = async (searchText: string) => {
        try {
            setLoading(true);
            const data = await Films.getPage(1, searchText);
            const transformedFilms = data?.results.map((episode: IFilm) => ({
                ...episode,
                title: `Episode ${episode.episode_id} - ${episode.title}`,
            }));
            setFilms(transformedFilms || []);
            setLoading(false);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch films');
        }
    };

    useEffect(() => {
        if (searchText === '') {
            fetchFilms();
        } else {
            searchFilm(searchText);
        }
    }, [searchText]);

    return {films, loading, error, setSearchText, setFilms};
};
