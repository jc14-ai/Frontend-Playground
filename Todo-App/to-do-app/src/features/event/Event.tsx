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

    const hoverRemove = (removeRef: HTMLImageElement) => {
        if (removeRef) removeRef.src = removeW;
    }

    const exitRemove = (removeRef: HTMLImageElement) => {
        if(removeRef) removeRef.src = removeG;   
    }

    const hoverDone = (doneRef: HTMLImageElement) => {
        if(doneRef) doneRef.src = doneW; 
    }

    const exitDone = (doneRef: HTMLImageElement) => {
        if(doneRef) doneRef.src = doneG; 
    }

    const hoverDelete = (deleteRef: HTMLImageElement) => {
        if(deleteRef) deleteRef.src = deleteW;
    }

    const exitDelete = (deleteRef: HTMLImageElement) => {
        if(deleteRef) deleteRef.src = deleteG; 
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
                    <img className="remove-img"
                        onClick={() => removeEvent(box.id)}
                        src={removeG}
                        ref={removeRef}
                        onMouseEnter={(removeRef) => hoverRemove(removeRef.currentTarget)}
                        onMouseLeave={(removeRef) => exitRemove(removeRef.currentTarget)}
                        />

                    <img className="done-img"
                        onClick={() => checkEvent(box.id, box.task)}
                        src={doneG}
                        ref={doneRef}
                        onMouseEnter={(doneRef) => hoverDone(doneRef.currentTarget)}
                        onMouseLeave={(doneRef) => exitDone(doneRef.currentTarget)}
                        />
                </div>
            </div>)}
        </div>

        <div className='done-event-container'>
            {doneBoxes.map(doneBox => 
            <div className='my-done-event' key={doneBox.id}>
                <p className='to-do-done'>{doneBox.task}</p>
                    <img className="done-img"
                        onClick={() => deleteEvent(doneBox.id)}
                        src={deleteG}
                        ref={deleteRef}
                        onMouseEnter={(deleteRef) => hoverDelete(deleteRef.currentTarget)}
                        onMouseLeave={(deleteRef) => exitDelete(deleteRef.currentTarget)}
                        />
            </div>)}
        </div>
    </div>
}

export default Event;