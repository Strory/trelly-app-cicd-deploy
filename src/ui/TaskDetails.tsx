import { useTaskDetails } from "../bll/useTaskDetails"
import styles from './TaskDetails.module.css'

type Props = {
    selectedTaskId: string | null
    boardId: string | null
}

export function TaskDetails({selectedTaskId, boardId}: Props) {
    const TaskDetails = useTaskDetails(selectedTaskId, boardId)

    return (
        <div className={styles.details}>
            <h2>Task details</h2>
            { !TaskDetails && !selectedTaskId && 'Task is not selected' }
            { !TaskDetails && selectedTaskId && 'loading...' }
            { TaskDetails && TaskDetails.id !== selectedTaskId && 'loading...' }
            { TaskDetails && TaskDetails.id === selectedTaskId && (
                <ul>
                    <li>title - { TaskDetails.attributes.title }</li>
                    <li>boardTitle - { TaskDetails.attributes.boardTitle }</li>
                    <li>description - { TaskDetails.attributes.description == null || TaskDetails.attributes.description == '' ? 'no description' : TaskDetails.attributes.description }</li>
                </ul>
            ) }
        </div>
    )
}