import { useState, useRef} from "react";
import removeG from "../../assets/remove_gray.png";
import removeW from "../../assets/remove_white.png";
import doneG from "../../assets/done_gray.png";
import doneW from "../../assets/done_white.png";
import deleteG from "../../assets/delete_gray.png";
import deleteW from "../../assets/delete_white.png";
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
    const removeRef = useRef<HTMLImageElement>(null);
    const doneRef = useRef<HTMLImageElement>(null);
    const deleteRef = useRef<HTMLImageElement>(null);
    // const [hasEntered, setEntered] = useState<boolean>(false);

    const addTask = ():void => {
        if (valueRef.current){
            const input = valueRef.current.value;

            if(input.toString() === "" || input.toString().trim() === "") return;

            setCount(count => count + 1);
            setBoxes(box => [...box, {id: count, task: input}]);
            valueRef.current.value = "";
        }
    }

    const hoverRemove = ():void => {
        if(removeRef.current)
            removeRef.current.src = removeW;
    }
    const exitRemove = ():void => {
        if(removeRef.current)
            removeRef.current.src = removeG;
    }

    const hoverDone = ():void => {
        if(doneRef.current)
            doneRef.current.src = doneW;
    }
    const exitDone = ():void => {
        if(doneRef.current)
            doneRef.current.src = doneG;
    }

    const hoverDelete = ():void => {
        if(deleteRef.current)
            deleteRef.current.src = deleteW;
    }
    const exitDelete = ():void => {
        if(deleteRef.current)
            deleteRef.current.src = deleteG;
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
                <p className='to-do'> {box.task} </p>
                <div className="task-button-container">
                    <img className="remove-img" 
                        src={removeG}
                        ref={removeRef}
                        onMouseEnter={() => hoverRemove()}
                        onMouseLeave={() => exitRemove()} 
                        onClick={() => removeTask(box.id)}/>
                    
                    <img className="done-img" 
                        src={doneG} 
                        onClick={() => checkTask(box.id, box.task)}
                        ref={doneRef}
                        onMouseEnter={() => hoverDone()}
                        onMouseLeave={() => exitDone()} />
                </div>
            </div>)}
        </div>

        <div className='done-task-container'>
            {doneBoxes.map(doneBox => 
            <div className='my-done-task' key={doneBox.id}>
                <p className='to-do-done'> {doneBox.task} </p>    
                <img className="delete-img" 
                onClick={() => deleteTask(doneBox.id)} 
                src={deleteG}
                ref={deleteRef}
                onMouseEnter={() => hoverDelete()}
                onMouseLeave={() => exitDelete()}/>
            </div>)}    
        </div>
    </div>
}

export default Task;