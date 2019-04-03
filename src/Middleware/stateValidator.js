import tv4 from 'tv4';
import schema from 'Middleware/stateSchema';

//getState returns all the data from our reducers
export default ({dispatch, getState}) => (next) => (action) => {
    next(action);
    if (!tv4.validate(getState(), schema)) {
        console.warn('Invalid state schema');
    }
}