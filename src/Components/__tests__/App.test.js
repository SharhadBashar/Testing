import React from 'react';
import {shallow} from 'enzyme';
import App from 'Components/App';
import CommentBox from 'Components/CommentBox';
import CommentList from 'Components/CommentList';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
});
it('Shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});
it('Shows a comment List', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})