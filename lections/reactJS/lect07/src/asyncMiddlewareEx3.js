
const asyncMiddlewareEx3 = store => next => action => {
    if (action.type === 'FETCH_DATA_REQUEST') {
        //запрос к API
        fetch('http://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                store.dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data })
            })
            .catch(error => {
                store.dispatch({ type: 'FETCH_DATA_ERROR', payload: error.toString() })
            });
    }
    return next(action);
}

export default asyncMiddlewareEx3;
