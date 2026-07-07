// import './App.css'
// import { useState, useEffect } from 'react';
 
// export function App() {
//   const [selectedTaskId, setSelectedTaskId] = useState(null);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [tasks, setTasks] = useState(null);
//   const [boardId, setBoardId] = useState(null)

//   useEffect(() => {
//     console.log('use effect');
//     fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
//       headers: {
//         "api-key": "62967173-e4a1-4379-822d-44aa28a0780b"
//       }
//     })
//     .then((res) => res.json())
//     .then((json) => setTasks(json.data));
//   }, []);

//   useEffect(() => {
//     fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + selectedTaskId, {
//           headers: {
//             "api-key": "62967173-e4a1-4379-822d-44aa28a0780b"
//           }
//         }).then((res) => res.json())
//           .then((json) => setSelectedTask(json.data));
//     }, [selectedTaskId]);

//   if (tasks === null) {
//     return (
//       <h4>Загрузка...</h4>
//     )
//   }
  
//   if (tasks.length === 0) {
//     return (
//       <h4>Задачи отсутствуют</h4>
//     )
//   }

//   return (
//     <>
//       <button onClick={ () => {
//         setSelectedTaskId(null);
//         setSelectedTask(null);
//        } }>Сбросить выделение</button>
//       <div className='wrapper'>
//         <ul className='task-list'>
//           {tasks.map((task) => (
//             <li key={task.id} 
//               className={ 'priority-' + task.attributes.priority + ' task-unit' } 
//               onClick={ () => {
//                 setSelectedTaskId(task.id);
//                 setBoardId(task.attributes.boardId);
//               }}
//               style={ {borderColor: selectedTaskId === task.id ? 'blue' : 'black'} }>
//               <div>
//                 <span className='title'>Заголовок: </span><span className='text' 
//                 style={ { textDecoration: task.attributes.status == 2 ? 'line-through' : 'none' } }
//                 >{task.attributes.title}</span>
//               </div>
//               <div>
//                 <span className='title'>Статус: </span><input type="checkbox" 
//                 checked={ task.attributes.status == 2 } 
//                 />
//               </div>
//               <div>
//                 <span className='title'>Дата создания: </span><span className='text'>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className='details'>
//           <h2>Task details</h2>
//           { !selectedTask && !selectedTaskId && 'Task is not selected' }
//           { !selectedTask && selectedTaskId && 'loading...' }
//           { selectedTask && selectedTask.id !== selectedTaskId && 'loading...' }
//           { selectedTask && selectedTask.id === selectedTaskId && (
//             <ul>
//               <li>title - { selectedTask.attributes.title }</li>
//               <li>boardTitle - { selectedTask.attributes.boardTitle }</li>
//               <li>description - { selectedTask.attributes.description == null || selectedTask.attributes.description == '' ? 'no description' : selectedTask.attributes.description }</li>
//             </ul>
//           ) }
//         </div>
//       </div>
//     </>
    
//   )
// }