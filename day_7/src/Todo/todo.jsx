//Todo

import React,{ useState } from "react";

const Todo = () => {
    const [tasks,setTasks] = useState([]);
    const [task,setTask] = useState("");

    const addTask = () => {
        if(task.trim()){
            setTasks([...tasks, task])
            setTask("");
        }
    }
    const removeTask = (index) => {
        setTasks(tasks.filter((_,i) => i!== index));
    }

    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task"
            />
            <button onClick={addTask}>Add Task</button>

            {/* display of Todos */}
        <ul>
            {tasks.map((t,index) => (
                <li key={index}>
                    {t} <button onClick={() => removeTask(index)}>Remove</button>
                </li>
            ))}
            </ul>
        </div>
    );

}
export default Todo;