import React, { useEffect, useState, useFetch } from 'react';
import ReactDOM from 'react-dom';

function Post() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            await fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => 
                    response.ok 
                        ? response.json()
                        : Promise.reject ("Can't communicate with the REST API for some reason"))
                .then(responsejson => setData({responsejson}));
        })();
    }, []);
    // Putting an empty array here, as if it's not there, useEffect will cause an infinite loop

    
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
                        {(data.responsejson || []).map((post, index) => {
                            return(
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.completed ? 'Completed' : 'ToDo'}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Post;
