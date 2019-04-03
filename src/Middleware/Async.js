/*export default function({dispatch}) {
    return function(next) {
        return function(action) {

        }
    }
}
This thing above is equivalent to:

export default ({dispatch}) => (next) => (action) => {

}*/

export default ({dispatch}) => (next) => (action) => {
    // console.log('dispatch', dispatch);
    // console.log('next', next);
    // console.log('action', action);
    //1. check to see if action ahs a promise in its payload property
    //If it does, wait for it to resolve, if not send it to the next middleware
    if (!action.payload || !action.payload.then) {
        return next(action);
    }
    //2. if there is a promise, wait for it to resolve
    //get its data and create a new action and dispatch it -> create a new action and 
    //send it through the entire chain again
    action.payload.then(function(resp) {
        const newAction = {
            ...action, 
            payload: resp
        }//take all the properties out of the action object 
        dispatch(newAction);
    }, function(err) {
        console.log("Error in Async Middleware: ", err);
    });
};