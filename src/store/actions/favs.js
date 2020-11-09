import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-posts';

const storeFavPost = favPost => {
    return {
        type: actionTypes.SAVE_FAV_POST,
        payload: {
            favPost: favPost
        }
    };
};

export const saveFavPost = favPost => {
    return dispatch => {

        axios.favPost('/favPosts.json', favPost)
            .then(response => {
                console.log(response);

                dispatch(storePost(favPost));
            })
            .catch(error => {
                console.log(error);
            })
    }
};

const loadFavPosts = favPosts => {
    return {
        type: actionTypes.FETCH_FAV_POSTS,
        payload: {
            favPosts: favPosts
        }
    };
}

export const fetchFavPosts = () => {
    return dispatch => {
        axios.get('/favPosts.json')
            .then(response => {
                console.log(response);

                const favPosts = Object.values(response.data).map((favPost) => {
                    return {...favPost};
                });

                dispatch(loadPosts(favPosts));
            })
            .catch(error => {
                console.log(error);
            })
    }
}