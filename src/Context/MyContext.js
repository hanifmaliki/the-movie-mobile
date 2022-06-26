import { createContext } from "react";

const MyContext = createContext({
    dataPopShows: {},
    setDataPopShows: () => { },
    pagePopShows: 1,
    setPagePopShows: () => { },
    dataTopShows: {},
    setDataTopShows: () => { },
    pageTopShows: 1,
    setPageTopShows: () => { },
    dataTopMovies: {},
    setDataTopMovies: () => { },
    pageTopMovies: 1,
    setPageTopMovies: () => { },
    dataUpMovies: {},
    setDataUpMovies: () => { },
    pageUpMovies: 1,
    setPageUpMovies: () => { },
});

export default MyContext;