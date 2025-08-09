import { useState, useRef} from "react";
import './Task.css'

interface Props{
    id: number;
    task: string;
}

function Task(){
   
    const [count, setCount] = useState<number>(0);
    const [boxes, setBoxes] = useState<Props[]>([]);
    const [doneBoxes, setDoneBoxes] = useState<Props[]>([]);
    const valueRef = useRef<HTMLInputElement>(null);

    const addTask = ():void => {
        if (valueRef.current){
            const input = valueRef.current.value;

            if(input.toString() === "" || input.toString().trim() === "") return;
            
            setCount(count => count + 1);
            setBoxes(box => [...box, {id: count, task: input}]);
            valueRef.current.value = "";
        }
    }

    const checkTask = (id:number, task:string):void => {
        setDoneBoxes(doneBoxes => [...doneBoxes, {id: id, task: task}]);
        removeTask(id);
    }

    const removeTask = (id:number):void => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    const deleteTask = (id:number):void => {
        setDoneBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return <div className='Task'>
        <input placeholder='To do' className='task-input' ref={valueRef}/>

        <button className='add-task-button' onClick={addTask}>
            Add Task
        </button>

        <div className='task-container'>{
            boxes.map(box => 
            <div className='my-task' key={box.id}>
                <p> {box.task} </p>
                <div className="task-button-container">
                    <button className='remove-task-button' onClick={() => removeTask(box.id)}>
                        Remove
                    </button>

                    <button className='done-task-button' onClick={() => checkTask(box.id, box.task)}>
                        Done
                    </button>
                </div>
            </div>)}
        </div>

        <div className='done-task-container'>
            {doneBoxes.map(doneBox => 
            <div className='my-done-task' key={doneBox.id}>
                <p> {doneBox.task} </p>
                <button className='delete-task-button' onClick={() => deleteTask(doneBox.id)}>
                    Delete
                </button>
            </div>)}    
        </div>
    </div>
}

export default Task;