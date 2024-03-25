import React from "react";
import Completed from "./TaskWork/Completed";
import Deferred from "./TaskWork/Deferred";
import Deployed from "./TaskWork/Deployed";
import PendingTask from "./TaskWork/PendingTask";
import Progress from "./TaskWork/Progress";

const BoardTask = () => {
    return (
        <div className="mt-8">
            <div className="grid lg:grid-cols-5 gap-20">
                <div className="p-4">
                    <PendingTask />
                </div>
                <div className="p-4">
                    <Progress />
                </div>
                <div className="p-4">
                    <Completed />
                </div>
                <div className="p-4">
                    <Deployed />
                </div>
                <div className="p-4">
                    <Deferred />
                </div>
            </div>
        </div>
    );
};

export default BoardTask;
