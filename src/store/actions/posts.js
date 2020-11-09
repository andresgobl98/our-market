import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-posts';


const storePost = post => {
    return {
        type: actionTypes.SAVE_POST,
        payload: {
            post: post
        }
    };
};

export const savePost = post => {
    return dispatch => {

        axios.post('/posts.json', post)
            .then(response => {
                console.log(response);

                dispatch(storePost(post));
            })
            .catch(error => {
                console.log(error);
            })
    }
};

const loadPosts = posts => {
    return {
        type: actionTypes.FETCH_POSTS,
        payload: {
            posts: posts
        }
    };
}

const saveNewPost = newPost => {
    return {
        type: actionTypes.ADD_FAV,
        payload: {
            newPost: newPost 
        }
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .then(response => {
                console.log(response);

                const posts = Object.values(response.data).map((post) => {
                    return { ...post };
                });

                dispatch(loadPosts(posts));
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const addFav = (newPost, onSuccessCallback) => {
    return dispatch => {
        axios.patch('/posts/' + newPost.id + '.json', newPost)
            .then(response => {
                console.log(response);

                dispatch(saveNewPost(newPost));

                if (onSuccessCallback) {
                    onSuccessCallback();
                }

            })
            .catch(error => {
                console.log(error);
            })
    }
}