import {SAVE_COMMENT} from 'Actions/types';
import {saveComment} from 'Actions';

describe('saveComment', () => {
    it('Has the correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('Has the correct payload', () => {
        const action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    });
})