import { type Task } from './../dal/api-fake'
import styles from './TaskItem.module.css'
import clsx from "clsx"

export type toSelect = (id: string, boardId: string) => void

type Props = {
    task: Task
    onTaskSelected: toSelect
    isSelectedTask: boolean
}

export function TaskItem({ task, onTaskSelected, isSelectedTask }: Props) {
    const taskClassName = clsx({
        [styles['priority-' + task.attributes.priority]]: true,
        [styles['task-unit']]: true,
        [styles['active-border']]: isSelectedTask
    })

    const titleClassName = clsx({
        [styles.title]: true,
        [styles['task-done']]: task.attributes.status == 2

    })

    return (
        <li
            className={taskClassName}
            onClick={ () => {onTaskSelected(task.id, task.attributes.boardId)} }
            >
            <div>
            <span className={titleClassName}>Заголовок: </span><span className={styles.text} 
            >{task.attributes.title}</span>
            </div>
            <div>
            <span className={styles.title}>Статус: </span><input type="checkbox" 
            checked={ task.attributes.status == 2 } 
            />
            </div>
            <div>
            <span className={styles.title}>Дата создания: </span><span className={styles.text}>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
            </div>
        </li>
    )
}