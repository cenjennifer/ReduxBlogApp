import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form'; //renaming the reducer to alias formReducer

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

//import reducer inside the redux form library and hook it up to our combineReducers call - redux form uses our redux instance/our instance of the redux store (for handling all the state that is being produced by the form) 
//benefit of redux form: save us from wiring up a bunch of action creators

export default rootReducer;
