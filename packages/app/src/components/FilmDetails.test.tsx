import {render} from 'vitest-browser-react';
import {test, expect} from 'vitest';
import {FilmDetails} from './FilmDetails';
import {EMPTY_DETAILS_MSG} from "../utils/constants.ts";
import {IFilm} from "../utils/swapi.ts";

test('renders empty details message when no film details are provided', () => {
    const {container} = render(<FilmDetails filmDetails={null}/>);
    expect(container.innerText).toBe(EMPTY_DETAILS_MSG);
});

test('renders film details correctly when filmDetails prop is provided', () => {
    const filmDetails: IFilm = {
        "title": "A New Hope",
        "episode_id": '4',
        "opening_crawl": "It is a period of civil war",
        "director": "George Lucas",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": new Date("1977-05-25"),
        "characters": [],
        "planets": [],
        "starships": [],
        "vehicles": [],
        "species": [],
        "created": new Date("2014-12-10T14:23:31.880000Z"),
        "edited": new Date("2014-12-20T19:49:45.256000Z"),
        "url": "https://swapi.dev/api/films/1/"
    }

    const {container} = render(<FilmDetails filmDetails={filmDetails}/>);
    expect(container.getElementsByTagName("h2")[0].innerText).toBe(filmDetails.title);
    expect(container.getElementsByTagName("cite")[0].innerText).toBe(filmDetails.opening_crawl);
    expect(container.getElementsByTagName("p")[0].innerText).toBe(`Producer: ${filmDetails.producer}`);

});
