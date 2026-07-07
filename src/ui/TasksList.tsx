import { TaskItem, type toSelect} from './TaskItem'
import { useTasks } from '../bll/useTasks'
import styles from './TaskList.module.css'

export type toResetType = () => void

type Props = {
    selectedTaskId: string | null
    onTaskSelected:  toSelect
    toReset: toResetType
}

export function TasksList({selectedTaskId, onTaskSelected, toReset}: Props) {
    const tasks = useTasks()

    if (tasks === null) {
        return (
        <h4>Загрузка...</h4>
        )
    }

    if (tasks.length === 0) {
        return (
        <h4>Задачи отсутствуют</h4>
        )
    }

    return (
      <div>
        <button onClick={toReset}>reset</button>
        <hr />
        <ul className={styles['task-list']}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onTaskSelected={onTaskSelected} isSelectedTask={selectedTaskId === task.id} />
          ))}
        </ul>
      </div>
    )
}