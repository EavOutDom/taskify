import React, { useState } from "react";
import "./app.css";
import InputField from "./components/input-field";
import TasksList from "./components/tasksList";
import { Tasks } from "./model";
const App: React.FC = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<Tasks[]>([]);

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        setTasks([...tasks, { id: Date.now(), name: task, completed: false }]);
        setTask("");
    };

    return (
        <div className={"app"}>
            <span className={"header"}>Taskyfy</span>
            <InputField
                task={task}
                setTask={setTask}
                handleAddTask={handleAddTask}
            />
            <TasksList tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default App;
