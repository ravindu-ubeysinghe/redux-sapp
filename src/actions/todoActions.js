import { FETCH_TODOS, NEW_TODO } from './types';

export default function fetchTodos() {
    return function (dispatch) {
        console.log('here');
        (async () => {
            await fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => 
                    response.ok 
                        ? response.json()
                        : Promise.reject ("Can't communicate with the REST API for some reason"))
                .then(todos => dispatch({
                    type: FETCH_TODOS,
                    payload: todos
                }));
        })();
    }
}