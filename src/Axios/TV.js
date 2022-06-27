import axios from "axios";

export const getTopRated = async (page) => {
    try {
        let data = []
        await axios.get('https://the-movie-backend.herokuapp.com/tv/getTopRated/' + page)
            .then(function (response) {
                data = response
            });
        return data?.data || null
    }
    catch (e) {
        return null
    }
}

export const getPopular = async (page) => {
    try {
        let data = []
        await axios.get('https://the-movie-backend.herokuapp.com/tv/getPopular/' + page)
            .then(function (response) {
                data = response
            });
        return data?.data || null
    }
    catch (e) {
        return null
    }
}