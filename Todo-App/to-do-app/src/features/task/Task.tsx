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
    // const [hasEntered, setEntered] = useState<boolean>(false);

    const addTask = ():void => {
        if (valueRef.current){
            const input = valueRef.current.value;

            if(input.toString() === "" || input.toString().trim() === "") return;

            setCount((count: number):number => count + 1);
            setBoxes((box: Props[]):Props[] => [...box, {id: count, task: input}]);
            valueRef.current.value = "";
        }
    }

    const checkTask = (id:number, task:string):void => {
        setDoneBoxes((doneBoxes: Props[]):Props[] => [...doneBoxes, {id: id, task: task}]);
        removeTask(id);
    }

    const removeTask = (id:number):void => {
        setBoxes((boxes: Props[]):Props[] => boxes.filter(box => box.id !== id));
    }

    const deleteTask = (id:number):void => {
        setDoneBoxes((boxes: Props[]):Props[] => boxes.filter(box => box.id !== id));
    }

    return <div className='Task'>
        <input placeholder='To do' className='task-input' ref={valueRef}/>

        <button className='add-task-button' onClick={addTask}>
            Add Task
        </button>

        <div className='task-container'>{
            boxes.map((box: Props) => 
            <div className='my-task' key={box.id}>
                <p className='to-do'> {box.task} </p>
                <div className="task-button-container">
                    <img className="remove-img" 
                        src={removeG}
                        onMouseEnter={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = removeW}
                        onMouseLeave={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = removeG} 
                        onClick={() => removeTask(box.id)}/>
                    
                    <img className="done-img" 
                        src={doneG} 
                        onClick={() => checkTask(box.id, box.task)}
                        onMouseEnter={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = doneW}
                        onMouseLeave={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = doneG} />
                </div>
            </div>)}
        </div>

        <div className='done-task-container'>
            {doneBoxes.map((doneBox: Props) => 
            <div className='my-done-task' key={doneBox.id}>
                <p className='to-do-done'> {doneBox.task} </p>    
                <img className="delete-img" 
                onClick={() => deleteTask(doneBox.id)} 
                src={deleteG}
                onMouseEnter={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = deleteW}
                onMouseLeave={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = deleteG}/>
            </div>)}    
        </div>
    </div>
}

export default Task;