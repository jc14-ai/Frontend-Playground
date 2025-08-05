import { useState } from "react";

interface Props{
    id: number;
}

function Task(){
    // const [task, incTask] = useState(<></>);
    // const [boxID, countID] = useState<Box[]>([]);
    const [count, countTask] = useState<number>(0);

    // const addTask = () => {
    //     countTask(count => count + 1);
    //     countID(id => [...id, {id : count}]);
    // };

    // const removeTask = () => {
    //     countTask(count => count > 0 ? count - 1 : count)
    // }
    // const addTask = () => {
    //     incTask(<>
    //     {task}
    //     <div className='my-task'>
    //         <button >done</button>
    //         <button>remove</button>
    //     </div>
    //     </>)
    // };

    return <div className='Task'>
        <input placeholder='To do' className='task-input'></input>
        <button className='add-task-button' >Add Task</button>
        <div className='task-container'>{
        [...Array(count)].map((_,i) => <div><button >remove {i}</button></div>)
        }</div>
        <div className='done-task-container'></div>
    </div>
}

export default Task;