import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import CommentBox from 'Components/CommentBox';

let wrapped;
//Runs before each it block
beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});
//Runs after each it block
afterEach(() => {
    wrapped.unmount();
});

it('Has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('The text area', () => {
    beforeEach(() => {
        //this finds the text area, passes it a value of new comment by passing the event.target.value, and then updates the component
        wrapped.find('textarea').simulate('change', {
            target: {value: 'New Comment'}
        }).update();
    });
    it('Has a typeable text area', () => {
        //testing to make sure textarea's value is the same as the value we defined in the previous step
        expect(wrapped.find('textarea').prop('value')).toEqual('New Comment');
    });
    
    it('Clears when submitted', () => {
        wrapped.find('form').simulate('submit').update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})


