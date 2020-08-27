import React, { useEffect, useState } from 'react';

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
   
    <div >
      <h1>Task Details</h1>
      <p>
       title: {task.title}
        </p>
    </div>
  
  );
}

export default ToDoDetail;
