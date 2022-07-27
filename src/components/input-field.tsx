import React, { useRef } from "react";
import "./style.css";

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ task, setTask, handleAddTask }) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form
            className={"input"}
            onSubmit={(e) => {
                handleAddTask(e);
                ref.current?.blur();
            }}
        >
            <input
                ref={ref}
                value={task}
                type={"text"}
                placeholder={"Enter a task"}
                className={"input_box"}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className={"input_button"} type={"submit"}>
                ADD
            </button>
        </form>
    );
};

export default InputField;
