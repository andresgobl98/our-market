import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  posts: [],
  loading: true,
  newPost: {},
};

const addFav = (state, action) => {
  const newPost = action.payload.newPost;
  return updateObject(state, { newPost: newPost });
};

const savePost = (state, action) => {
  const updatedPosts = [...state.posts];

  updatedPosts.push(action.payload.post);

  return updateObject(state, { posts: updatedPosts, loading: false });
};

const fetchPosts = (state, action) => {
  return updateObject(state, { posts: action.payload.posts, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_POST:
      return savePost(state, action);
    case actionTypes.FETCH_POSTS:
      return fetchPosts(state, action);
    case actionTypes.ADD_FAV:
      return addFav(state, action);
    default:
      return state;
  }
};

export default reducer;
