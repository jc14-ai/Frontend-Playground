import { useState } from "react";
import './Task.css'

interface Props{
    id: number;
}

function Task(){
   
    const [count, countTask] = useState<number>(0);
    const [boxes, giveBoxID] = useState<Props[]>([]);
    const [doneBoxes, checkBoxID] = useState<Props[]>([]);

    const addTask = ():void => {
        countTask(count => count + 1);
        giveBoxID(box => [...box, {id: count}]);
    }

    const checkTask = (id:number):void => {
        checkBoxID(doneBoxes => [...doneBoxes, {id: id}])
        removeTask(id);
    }

    const removeTask = (id:number):void => {
        giveBoxID(boxes => boxes.filter(box => box.id !== id))
    }

    const deleteTask = (id:number):void => {
        checkBoxID(doneBoxes => doneBoxes.filter(doneBox => doneBox.id !== id))
    }

    return <div className='Task'>
        <input placeholder='To do' className='task-input' />

        <button className='add-task-button' onClick={addTask}>
            Add Task
        </button>

        <div className='task-container'>{
            boxes.map(box => 
            <div className='my-task' key={box.id}>
                <div className="task-button-container">
                    <button className='remove-task-button' onClick={() => removeTask(box.id)}>
                        Remove
                    </button>

                    <button className='done-task-button' onClick={() => checkTask(box.id)}>
                        Done
                    </button>
                </div>
            </div>)}
        </div>

        <div className='done-task-container'>
            {doneBoxes.map(doneBox => 
            <div className='my-done-task' key={doneBox.id}>
                <button className='delete-task-button' onClick={() => deleteTask(doneBox.id)}>
                    Delete
                </button>
            </div>)}
        </div>
    </div>
}

export default Task;