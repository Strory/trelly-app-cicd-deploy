import { useState } from "react"
import { type toSelect } from './../ui/TaskItem'
import { type toResetType } from './../ui/TasksList'

export function useTaskSelection() {
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
    const [boardId, setBoardId] = useState<string | null>(null)

    const toSelectTask: toSelect = (id: string, boardId: string) => {
        setSelectedTaskId(id)
        setBoardId(boardId)
    }

    const toReset: toResetType = () => {
        setSelectedTaskId(null)
        setBoardId(null)
    }

    return {selectedTaskId, boardId, toSelectTask, toReset}
}