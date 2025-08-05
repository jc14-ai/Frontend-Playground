import { useState } from "react";

interface Props{
    id: number;
}

function Task(){
   
    const [count, countTask] = useState<number>(0);
    const [box, giveBoxID] = useState<Props[]>([]);

    const addTask = ():void => {
        countTask(count => count + 1);
        giveBoxID(box => [...box, {id: count}]);
    }

    const removeTask = (id:number) => {
        giveBoxID(boxes => boxes.filter(box => box.id !== id))
    }

    return <div className='Task'>
        <input placeholder='To do' className='task-input'></input>
        <button className='add-task-button' onClick={addTask}>Add Task</button>
        <div className='task-container'>{
        box.map((box) => <div key={box.id}>
            <button onClick={() => removeTask(box.id)}>remove {box.id}</button>
            </div>)
        }</div>
        <div className='done-task-container'></div>
    </div>
}

export default Task;