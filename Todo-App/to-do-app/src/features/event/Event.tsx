import { useState, useRef } from "react";
import removeG from '../../assets/remove_gray.png';
import removeW from '../../assets/remove_white.png';
import doneG from '../../assets/done_gray.png';
import doneW from '../../assets/done_white.png';
import deleteG from '../../assets/delete_gray.png';
import deleteW from '../../assets/delete_white.png';
import './Event.css'

interface Props{
    id: number;
    task: string;
}

function Event(){
   
    const [count, setCount] = useState<number>(0);
    const [boxes, setBoxes] = useState<Props[]>([]);
    const [doneBoxes, setDoneBoxes] = useState<Props[]>([]);
    const valueRef = useRef<HTMLInputElement>(null);
    const removeRef = useRef<HTMLImageElement>(null);
    const doneRef = useRef<HTMLImageElement>(null);
    const deleteRef = useRef<HTMLImageElement>(null);

    const hoverRemove = () => {

    }

    const exitRemove = () => {
        
    }

    const hoverDone = () => {
        
    }

    const exitDone = () => {
        
    }

    const hoverDelete = () => {
        
    }

    const exitDelete = () => {
        
    }
    
    const addEvent = ():void => {
        if(valueRef.current){
            const input = valueRef.current.value;

            if(input.toString() === "" || input.toString().trim() === "") return;

            setCount(count => count + 1);
            setBoxes(boxes => [...boxes, {id: count, task: input}]);
            valueRef.current.value = "";
        }
    }

    const checkEvent = (id:number, task:string):void => {
        setDoneBoxes(doneBoxes => [...doneBoxes, {id: id, task: task}])
        removeEvent(id);
    }

    const removeEvent = (id:number):void => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    const deleteEvent = (id:number):void => {
        setDoneBoxes(doneBoxes => doneBoxes.filter(box => box.id !== id))
    }

    return <div className='Event'>
        <input placeholder='To attend' className='event-input' ref={valueRef}/>

        <button className='add-event-button' onClick={addEvent}>
            Add Event
        </button>

        <div className='event-container'>
            {boxes.map(box => 
            <div className='my-event' key={box.id}>
                <p className='to-do'>{box.task}</p>
                <div className="event-button-container">
                    <button className='remove-event-button'>
                        <img className=""
                            onClick={() => removeEvent(box.id)}
                            src={removeG}
                            ref={removeRef}
                            />
                    </button>

                    <button className='done-event-button' onClick={() => checkEvent(box.id, box.task)}>
                        Done
                    </button>
                </div>
            </div>)}
        </div>

        <div className='done-event-container'>
            {doneBoxes.map(doneBox => 
            <div className='my-done-event' key={doneBox.id}>
                <p className='to-do-done'>{doneBox.task}</p>
                <button className='delete-event-button' onClick={() => deleteEvent(doneBox.id)}>
                    Delete
                </button>
            </div>)}
        </div>
    </div>
}

export default Event;