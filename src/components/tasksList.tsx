import React from "react";
import { Tasks } from "../model";
import SingleTask from "./single-task";
import "./style.css";

interface Props {
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const TasksList: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
        <div className={'task'}>
            {tasks.map((task) => {
                return (
                    <SingleTask key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
                );
            })}
        </div>
    );
};

export default TasksList;
