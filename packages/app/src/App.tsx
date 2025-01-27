import {useCallback, useEffect, useState} from "react";
import {Button, ButtonGroup, Loader, ListGroup,} from "@etraveli/ui-library";
import {SORT_BY_NAME, SORT_BY_YEAR} from "./utils/constants.ts";
import {FilmList, ErrorBoundary} from "./components";
import {useFilms} from "./hooks/use-films.tsx";
import {IFilm} from "./utils/swapi.ts";
import {FilmDetails} from "./components/FilmDetails.tsx";
import {debounce, sortBy} from 'lodash';
import './App.css'

type SortBy = 'title' | "release_date";

function App() {
    const [sortFilmBy, setSortFilmBy] = useState<SortBy | null>(null);
    const [selected, setSelected] = useState<IFilm | null>(null);
    const {films, loading, error, setSearchText, setFilms} = useFilms();

    const setSelectedData = useCallback((data: IFilm) => {
        setSelected(data);
    }, [])

    const debouncedSearch = debounce((event) => {
        setSelected(null);
        setSearchText(event.target.value)
        setSortFilmBy(null);
    }, 1000);

    useEffect(() => {
        if (sortFilmBy) {
            const sortedFilms = sortBy(films, [sortFilmBy]);
            setFilms(sortedFilms);
        }
    }, [sortFilmBy])

    return (
        <div className="container-fluid">
            <input
                type="text"
                className="form-control-lg w-100 mt-3"
                placeholder="Search by name"
                onChange={debouncedSearch}/>
            <ButtonGroup className="mt-4">
                <Button
                    color="primary"
                    outline
                    onClick={() => setSortFilmBy(SORT_BY_NAME)}
                    active={sortFilmBy === SORT_BY_NAME}
                >
                    Sort By Name
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setSortFilmBy(SORT_BY_YEAR)}
                    active={sortFilmBy === SORT_BY_YEAR}
                >
                    Sort By Year
                </Button>
            </ButtonGroup>
            <div className="container-fluid mt-4">
                <div className="row ">
                    <div className="col border-right border-dark border-1">
                        {loading && <Loader
                          type="grow"
                          color="primary"
                          size="sm">
                          Loading...
                        </Loader>}
                        {!loading && !error &&
                          <ErrorBoundary>
                            <ListGroup>
                              <FilmList filmList={films} onSelectFilm={setSelectedData} selectedFilm={selected}/>
                            </ListGroup>
                          </ErrorBoundary>
                        }
                    </div>
                    <div className="col p-3 border ">
                        <FilmDetails filmDetails={selected}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
