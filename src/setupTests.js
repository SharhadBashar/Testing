//Setup Enzyme. It needs to be under src, and needs to be called setupTests.js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });