import React from 'react';
import "./Help.scss"

const Help = () => {
  return (
    <div className="help" >
      <h1>Help</h1>
      <p>
      You can add a task by writing in the "todo" field. Accept the task by clicking send. <br /><br />
      You can set priority dor you task. Select from the list on the right "Low", "Medium" or "High". <br /><br />
      You can delete your Task by clicking "Delete" on right side. <br /><br />
      You can delete all task by clicking "Clear all" at the bottom button. <br /><br />
      You can finish the task by checking on the left side
        </p>
    </div>
  );
}

export default Help;