import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import CommentList from 'Components/CommentList';

let wrapped;
//Runs before each it block
const initialState = {
    comments: ['Comment 1', 'Comment 2']
}; 
beforeEach(() => {
    wrapped = mount(<Root initialState = {initialState}><CommentList /></Root>);
});
//Runs after each it block
afterEach(() => {
    wrapped.unmount();
});
it('Creates one li per comment', () => {
    expect(wrapped.find('li').length).toEqual(initialState.comments.length);
});
it('Shows the text for each comment', () => {
    //console.log(wrapped.text());
    initialState.comments.forEach((comment) => {
        expect(wrapped.render().text()).toContain(comment);
    })
});


