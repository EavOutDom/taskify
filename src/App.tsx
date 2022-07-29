import React, { useState } from "react";
import "./app.css";
import InputField from "./components/input-field";
import TasksList from "./components/tasksList";
import { Tasks } from "./model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Tasks[]>([]);

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        setTasks([...tasks, { id: Date.now(), name: task, completed: false }]);
        setTask("");
    };

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) return;
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
            return;
        let add;
        let active = tasks;
        let completed = completedTasks;
        if (source.droppableId === "TaskList") {
            add = active[source.index];
            active.splice(source.index, 1);
            setTasks(active);
        }else{
            add = completed[source.index];
            completed.splice(source.index, 1);
            setCompletedTasks(completed);
        }

        if (destination.droppableId === "TaskList") {
            active.splice(destination.index, 0, add);
            setTasks(active);
        }else{
            completed.splice(destination.index, 0, add);
            setCompletedTasks(completed);
        }
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={"app"}>
                <span className={"header"}>Taskyfy</span>
                <InputField
                    task={task}
                    setTask={setTask}
                    handleAddTask={handleAddTask}
                />
                <TasksList
                    tasks={tasks}
                    setTasks={setTasks}
                    completedTasks={completedTasks}
                    setCompletedTasks={setCompletedTasks}
                />
            </div>
        </DragDropContext>
    );
};

export default App;
