import React, { useState } from 'react'

function PostForm() {
    const [todo, setTodo] = useState({
        id: 0,
        title: '',
        completed: false
    });

    function updateTodo(e){
        // send todos to this to fetch back the old state 
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
        console.log(JSON.stringify(todo));
    }

    function submitTodo(e){
        e.preventDefault();
        console.log(todo.id + ' | ' + todo.title + ' | ' + todo.completed);
    }

    return (
        <form>
            <label>ID</label><input type="number" name="id" onChange={updateTodo} />
            <label>Title</label><input type="text" name="title" onChange={updateTodo} />
            <label>Completed</label><input type="checkbox" name="completed" onChange={updateTodo} />
            <button type="submit" onClick={submitTodo}></button>
        </form>
    )
}

export default PostForm;