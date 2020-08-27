import React, { useEffect, useState } from 'react';
import "./ToDodetail.scss"

const ToDoDetail = (props) => {
    const [task, setTask] = useState("");
    useEffect(() => {
        getData();

    }, []);
    const getData = async () => {
        let response = await fetch(`/todos/${props.match.params.id}`);
        let data = await response.json()
        setTask(data);
    }
    return (

        <div className="detail">
            <h1>Task: {task.title}</h1>
            <div className="main">
                <div className="wrapper2">
                    <h2>Comment:</h2>
                    <textarea rows="10">
                        something here
                    </textarea>
                </div>
                <div className="wrapper">
                    <div className="start"> <p>START: 00:00:00</p> </div>
                    <div className="end"> <p>END: 00:00:00</p> </div>
                    <div className="duration"> <p>TIME: 00:00:00</p> </div>
                </div>
            </div>
        </div>

    );
}

export default ToDoDetail;
