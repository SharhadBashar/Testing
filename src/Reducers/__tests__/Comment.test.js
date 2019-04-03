import commentsReducer from 'Reducers/Comment';
import {SAVE_COMMENT} from 'Actions/types';

it('Handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }
    const newState = commentsReducer([], action);
    expect (newState).toEqual(['New Comment']);
});

it('Handles actions of unknown type', () => {
    const newState = commentsReducer([], {});
    expect (newState).toEqual([]);
});