import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Tasks } from "../model";
import SingleTask from "./single-task";
import "./style.css";

interface Props {
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
    completedTasks: Tasks[];
    setCompletedTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const TasksList: React.FC<Props> = ({
    tasks,
    setTasks,
    completedTasks,
    setCompletedTasks,
}) => {
    return (
        <div className={"container"}>
            <Droppable droppableId="TaskList">
                {(provider) => (
                    <div
                        className={"task"}
                        ref={provider.innerRef}
                        {...provider.droppableProps}
                    >
                        <span className="task_heading">Tasks</span>
                        {tasks.map((task, index) => {
                            return (
                                <SingleTask
                                    index={index}
                                    key={task.id}
                                    task={task}
                                    tasks={tasks}
                                    setTasks={setTasks}
                                />
                            );
                        })}
                        {provider.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="CompletedTaskList">
                {(provider) => (
                    <div
                        className={"task completed"}
                        ref={provider.innerRef}
                        {...provider.droppableProps}
                    >
                        <span className="task_heading">Completed</span>
                        {completedTasks.map((task, index) => {
                            return (
                                <SingleTask
                                    index={index}
                                    key={task.id}
                                    task={task}
                                    tasks={completedTasks}
                                    setTasks={setCompletedTasks}
                                />
                            );
                        })}
                        {provider.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TasksList;
