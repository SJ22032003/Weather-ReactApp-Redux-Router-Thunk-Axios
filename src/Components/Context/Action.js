import axios from "axios"

const apiKey = '88013528b8f266e96b49b381e4b09d21' ;

export const fetchUsersRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    }
}

export const favouriteWeather = (data) => {
    return {
        type: 'FAVOURITE_WEATHER',
        payload: data
    }
}

export const deleteFavouriteWeather = (data) => {
    return {
        type: 'DELETE_FAVOURITE_WEATHER',
        payload: data
    }
}

export const removeFav = (name) => {
    return {
        type: 'REMOVE_FAV',
        payload:name,
    }
} 

export const fetchUsers =  (city) => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
        .then(response => {
            const data = response.data;
            dispatch(fetchUsersSuccess(data));
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}