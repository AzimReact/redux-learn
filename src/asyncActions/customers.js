import {getAllUsers} from "../store/customerReducer";

export const fetchCusomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(getAllUsers(json)))
    }
}