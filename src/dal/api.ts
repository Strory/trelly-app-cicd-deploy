type TaskDetailsDto = {
    id: string
    title: string | null
    description: string | null
    boardId: string
    boardTitle: string
    order: number
    status: number
    priority: number
    startDate: string | null
    deadline: string | null
    addedAt: string | null
    updateAt: string | null
    attachments: Array<string>
}

export type TaskDetail = {
    id: string
    type: string
    attributes: TaskDetailsDto
}

type GetTaskOutput = {
    data: TaskDetail
}

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if (!apiKey) {
        return undefined
    }

    return {
        "api-key": import.meta.env.VITE_API_KEY
    }
}

export const getTask = (boardId: string, taskId: string) => {
    const promise: Promise<TaskDetail> = fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + taskId, {
            headers: prepareHeaders()
            }).then((res) => res.json())
            .then((json: GetTaskOutput) => json.data)
    return promise
}

type GlobalTaskListItemDto = {
    id: string
    title: string | null
    boardId: string
    status: number
    priority: number
    addedAt: string
    attachmentsCount: number
}

export type Task = {
    id: string
    type: string
    attributes: GlobalTaskListItemDto
}

type GlobalTaskListResponse = {
    data: Array<Task>
}

export const getTasks = () => {
    const promise: Promise<Array<Task>> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: prepareHeaders()
        })
        .then((res) => res.json())
        .then((json: GlobalTaskListResponse) => json.data)
    return promise
}