import { useState, useRef } from "react";
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

        <div className='event-container'>{
            boxes.map(box => 
            <div className='my-event' key={box.id}>
                <p className='to-do'>{box.task}</p>
                <div className="event-button-container">
                    <button className='remove-event-button' onClick={() => removeEvent(box.id)}>
                        Remove
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