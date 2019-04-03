import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'root';
import App from 'components/App';

//before we stimulate the button click, turn off any requests being made by axios
beforeEach(() => {
    //set up moxios and try to intercept any request axios tries to make
    moxios.install()
    //if it sees any requests, attempt to automatically respond to it for us
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched # 1'}, {name: 'Fetched # 2'}] 
    });
});
afterEach(() => {
    moxios.uninstall();
});
it('Fetches a list of comments and diplays them', (done) => {
    const wrapped = mount(<Root><App /></Root>)
    wrapped.find('.fetch-comments').simulate('click');
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
    
});