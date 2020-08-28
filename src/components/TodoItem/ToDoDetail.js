import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./ToDodetail.scss"

const link = `/todos`;
const ToDoDetail = (props) => {
    const [task, setTask] = useState("");
    const [comm, setComment] = useState("")
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        let response = await fetch(`/todos/${props.match.params.id}`);
        let data = await response.json()
        setTask(data);
        setComment(data.comment)
    }
    const onChangeHandler = (e) => {
        setComment(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let newItemUpdate = {
            title: task.title,
            completed: task.completed,
            comment: comm
        }

        axios.put(`${link}/${task._id}`, { ...newItemUpdate })
            .then(
                response => {
                    axios.get(link)
                        .then(
                            response => {
                                let data = response.data
                                // console.log(data)
                            }
                        );
                }
            );
    }

    return (

        <div className="detail">
            <h1>Task: {task.title}</h1>
            <div className="main">
                <div className="wrapper2">
                    <h2>Comment:</h2>
                    <form action="" onSubmit={onSubmitHandler}>
                        <textarea rows="10" value={comm} onChange={onChangeHandler}>
                        </textarea>
                        <input type="submit" value="Save" className="button" />
                    </form>
                </div>
                <div className="wrapper">
                    <div className="start"> <p>START: {new Date(task.time).toLocaleString("en-US")}</p> </div>
                    <div className="end"> <p>END: 00:00:00</p> </div>
                    <div className="duration"> <p>TIME: 00:00:00</p> </div>
                </div>
            </div>
        </div>

    );
}

export default ToDoDetail;
