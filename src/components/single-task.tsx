import React, { useState } from "react";
import { Tasks } from "../model";
import { AiFillEdit, AiFillDelete, AiOutlineFileDone } from "react-icons/ai";
import "./style.css";

interface Props {
    task: Tasks;
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}
const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [taskName, setTaskName] = useState<string>(task.name);
    const handleComplete = (id: number) => {
        setTasks(
            tasks.map((task) => {
                return task.id === id
                    ? { ...task, completed: !task.completed }
                    : task;
            })
        );
    };

    const handleDelete = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleUpdate = (id: number, e: React.FormEvent) => {
        e.preventDefault();
        setTasks(
            tasks.map((task) => {
                return task.id === id ? { ...task, name: taskName } : task;
            })
        );
        setIsEdit(false);
    };

    return (
        <form
            className={"single_task"}
            onSubmit={(e) => handleUpdate(task.id, e)}
        >
            {isEdit ? (
                <input
                    autoFocus
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className={"single_task--input"}
                />
            ) : task.completed ? (
                <span
                    className={"single_task--text"}
                    style={{
                        textDecoration: "line-through",
                        textDecorationThickness: "2px",
                    }}
                >
                    {task.name}
                </span>
            ) : (
                <span className={"single_task--text"}>{task.name}</span>
            )}

            <div>
                <span
                    className={"icon"}
                    onClick={() => {
                        if (!task.completed) {
                            setIsEdit(!isEdit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>
                <span className={"icon"} onClick={() => handleDelete(task.id)}>
                    <AiFillDelete />
                </span>
                <span
                    className={"icon"}
                    onClick={() => handleComplete(task.id)}
                >
                    <AiOutlineFileDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTask;
