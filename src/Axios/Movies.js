import axios from "axios";

export const getTopRated = async (page) => {
    let data = []
    await axios.get('https://the-movie-backend.herokuapp.com/movies/getTopRated/' + page)
        .then(function (response) {
            data = response
        });
    return data?.data
}

export const getUpcoming = async (page) => {
    let data = []
    await axios.get('https://the-movie-backend.herokuapp.com/movies/getUpcoming/' + page)
        .then(function (response) {
            data = response
        });
    return data?.data
}