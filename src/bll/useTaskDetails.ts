import { useState, useEffect } from "react";
import { getTask, type TaskDetail } from '../dal/api-fake';

export function useTaskDetails(selectedTaskId: string | null, boardId: string | null) {
    const [selectedTask, setSelectedTask] = useState<TaskDetail | null>(null);
    
    useEffect(() => {
        if (boardId !== null && selectedTaskId !== null) {
            getTask(boardId, selectedTaskId).then((data) => setSelectedTask(data))
        } else {
            setSelectedTask(null)
        }
    }, [selectedTaskId]);

    return selectedTask
}