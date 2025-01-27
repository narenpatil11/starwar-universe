import {ListGroupItem} from "@etraveli/ui-library";
import {IFilm} from "../utils/swapi.ts";
import {FC} from "react";
import classNames from "classnames";

/**
 * Interface representing the properties for the FilmList component.
 *
 * @interface IFilmListProps
 *
 * @property {IFilm[] | null} filmList - The list of films to be displayed.
 * @property {(film: IFilm) => void} onSelectFilm - Callback function triggered when a film is selected.
 * @property {IFilm | null} selectedFilm - The currently selected film.
 */
export interface IFilmListProps {
    filmList: IFilm[] | null;
    onSelectFilm: (film: IFilm) => void;
    selectedFilm: IFilm | null;
}

/**
 * FilmList is a functional component that renders a list of films in a styled layout.
 * It highlights the selected film and allows users to select a film from the list.
 *
 */
export const FilmList: FC<IFilmListProps> = ({filmList, onSelectFilm, selectedFilm}) => {
    return filmList?.map((film: IFilm) => (
        <ListGroupItem
            active={selectedFilm?.episode_id === film.episode_id}
            key={film.episode_id + film.title}
            action
            tag="button"
            onClick={() => onSelectFilm(film)}
        >
            <li className={
                classNames(
                    selectedFilm?.episode_id === film.episode_id ? 'active' : false,
                    '"list-group-item d-flex justify-content-between align-items-start',
                )
            }>
                <div className="ms-2 me-auto">
                    <div className="" data-test-id="episode_id">{`Episode ${film.episode_id}`}</div>
                    <p className="fw-bold fs-5" data-test-id="title">{film.title}</p>
                </div>
                <span className="badge text-bg-light rounded-pill p-3 mt-2" data-test-id="release_date">
                    {new Date(film.release_date).toLocaleDateString().toString()}
                </span>
            </li>
        </ListGroupItem>
    ))
};

