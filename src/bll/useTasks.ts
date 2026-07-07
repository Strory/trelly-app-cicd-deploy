import { useState, useEffect } from "react";
import { getTasks, type Task } from '../dal/api-fake';

export function useTasks() {
    const [tasks, setTasks] = useState<Array<Task> | null>(null);
    
    useEffect(() => {
        getTasks()
        .then((data) => setTasks(data));
    }, []);

    return tasks
}