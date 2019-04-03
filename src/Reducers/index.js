import {combineReducers} from 'redux';
import commentsReducer from 'Reducers/Comment';
import authReducer from 'Reducers/Auth'

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
});