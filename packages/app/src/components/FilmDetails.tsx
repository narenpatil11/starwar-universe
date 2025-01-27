import {IFilm} from "../utils/swapi.ts";
import {FC} from "react";
import {EMPTY_DETAILS_MSG} from "../utils/constants.ts";
import {ErrorBoundary} from "./ErrorBoundary.tsx";

/**
 * Interface representing the properties for displaying film details.
 * Used to pass the details of a film to a component.
 * Properties:
 * - filmDetails: Optional. An object containing information about the film or null.
 */
export interface IFilmDetailsProps {
    filmDetails?: IFilm | null;
}

/**
 * FilmDetails is a functional component that displays detailed information about a film.
 * It uses the provided film details to render the film's title, opening crawl text, and producer.
 * If no film details are provided, an empty details message is returned.
 */
export const FilmDetails: FC<IFilmDetailsProps> = ({filmDetails}) => {
    if (!filmDetails) return EMPTY_DETAILS_MSG;

    return (
        <ErrorBoundary>
            <figure>
                <blockquote className="blockquote">
                    <h2>{filmDetails?.title}</h2>
                </blockquote>

                <figcaption className="blockquote-footer fs-5 mt-3">
                    <cite title={filmDetails?.opening_crawl}>
                        {filmDetails?.opening_crawl}
                    </cite>
                </figcaption>
                <p className="text-body-secondary">
                    <b>Producer</b>: {filmDetails?.producer}
                </p>
            </figure>
        </ErrorBoundary>
    );
}

