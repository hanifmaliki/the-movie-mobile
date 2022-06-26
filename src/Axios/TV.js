import axios from "axios";

export const getTopRated = async (page) => {
    let data = []
    await axios.get('https://the-movie-backend.herokuapp.com/tv/getTopRated/' + page)
        .then(function (response) {
            data = response
        });
    return data?.data
}

export const getPopular = async (page) => {
    let data = []
    await axios.get('https://the-movie-backend.herokuapp.com/tv/getPopular/' + page)
        .then(function (response) {
            data = response
        });
    return data?.data
}