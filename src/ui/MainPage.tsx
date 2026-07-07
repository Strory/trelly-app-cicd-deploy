import { TasksList } from './TasksList'
import { TaskDetails } from './TaskDetails'
import { useTaskSelection } from './../bll/useTaskSelection';
import styles from './MainPage.module.css'

export function MainPage() {
    const {selectedTaskId, boardId, toSelectTask, toReset} = useTaskSelection()

    return (
        <div>
            <div 
            className={styles.container}
            // style={ {display: 'flex', gap: '30px'} }
            >
                <TasksList selectedTaskId={selectedTaskId} onTaskSelected={toSelectTask} toReset={ toReset }/>
                <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId} />
            </div>
        </div>
    )
}