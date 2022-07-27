import React from "react";
import { Tasks } from "../model";

interface Props {
    task: Tasks;
}
const SingleTask: React.FC<Props> = ({ task }) => {
    return (
        <div>
            <p>{task.name}</p>
        </div>
    );
};

export default SingleTask;
