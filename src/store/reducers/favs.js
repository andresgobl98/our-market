import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    favPosts: [],
}

const saveFavPost = (state, action) => {
    const updatedFavPosts = [...state.favPosts];

    updatedFavPosts.push(action.payload.favPost);

    return updateObject(state, { favPosts: updatedFavPosts});
}

const fetchFavPosts = (state, action) => {
    return updateObject(state, { favPosts: action.payload.favPosts})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_FAV_POST: return saveFavPost(state, action);
        case actionTypes.FETCH_FAV_POSTS: return fetchFavPosts(state, action);
        default: return state;
    }
}

export default reducer;