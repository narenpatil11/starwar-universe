import {render} from "vitest-browser-react";
import {expect, test, vi} from "vitest";
import {FilmList} from "./FilmList";
import {IFilm} from "../utils/swapi.ts";

const mockFilms: IFilm[] = [
    {
        episode_id: '1', title: "A New Hope", release_date: new Date("1977-05-25"),
        characters: [],
        created: new Date(),
        director: "",
        edited: new Date(),
        opening_crawl: "",
        planets: [],
        producer: "",
        species: [],
        starships: [],
        url: "",
        vehicles: []
    },
    {
        episode_id: '2', title: "The Empire Strikes Back", release_date: new Date("1980-05-21"), characters: [],
        created: new Date(),
        director: "",
        edited: new Date(),
        opening_crawl: "",
        planets: [],
        producer: "",
        species: [],
        starships: [],
        url: "",
        vehicles: []
    },
    {
        episode_id: '3', title: "Return of the Jedi", release_date: new Date("1983-05-25"), characters: [],
        created: new Date(),
        director: "",
        edited: new Date(),
        opening_crawl: "",
        planets: [],
        producer: "",
        species: [],
        starships: [],
        url: "",
        vehicles: []
    },
];

const mockOnSelectFilm = vi.fn();

test("renders the list of films correctly", () => {
    const {container} = render(
        <FilmList filmList={mockFilms} onSelectFilm={mockOnSelectFilm} selectedFilm={null}/>
    );
    expect(container.querySelectorAll("[data-test-id=episode_id]")[0].textContent).toBe('Episode 1');
    expect(container.querySelectorAll("[data-test-id=title]")[0].textContent).toBe('A New Hope');

});

test("highlights the selected film", () => {
    const {container} = render(
        <FilmList filmList={mockFilms} onSelectFilm={mockOnSelectFilm} selectedFilm={mockFilms[0]}/>
    );
    const classes = [...container.getElementsByTagName("li")[0].classList]
    expect(classes.includes("active")).toBeTruthy();
});

