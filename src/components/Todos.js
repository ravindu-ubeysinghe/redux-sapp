import React, { useEffect, useState } from 'react';
import fetchTodos from '../actions/todoActions';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function Todos(props) {
    useEffect(() => {
        props.fetchTodos();
    }, []);
    // Putting an empty array here, as if it's not there, useEffect will cause an infinite loop
    // If the component needs to be re-rendered when the state changes, then that property should go inside the array

    
    return (
        <div>
            {  
                // using a shorthand OR here to check if this key exists, if not initialize with an empty array so that map won't work
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(props.todos|| []).map((todo, index) => {
                            return(
                                <tr key={index}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? 'Completed' : 'ToDo'}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    );
}

// Defining prop types
Todos.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired

}

// Mapping global state to props
const mapStateToProps = (state) => ({
    todos: state.todos.items
});

export default connect (mapStateToProps, { fetchTodos })(Todos);
