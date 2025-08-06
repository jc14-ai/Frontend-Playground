import { useState } from "react";
import './Event.css'

interface Props{
    id: number;
}

function Event(){
   
    const [count, countEvent] = useState<number>(0);
    const [boxes, giveBoxID] = useState<Props[]>([]);
    const [doneBoxes, checkBoxID] = useState<Props[]>([]);

    const addEvent = ():void => {
        countEvent(count => count + 1);
        giveBoxID(box => [...box, {id: count}]);
    }

    const checkEvent = (id:number):void => {
        checkBoxID(doneBoxes => [...doneBoxes, {id: id}])
        removeEvent(id);
    }

    const removeEvent = (id:number):void => {
        giveBoxID(boxes => boxes.filter(box => box.id !== id))
    }

    const deleteEvent = (id:number):void => {
        checkBoxID(doneBoxes => doneBoxes.filter(doneBox => doneBox.id !== id))
    }

    return <div className='Event'>
        <input placeholder='To attend' className='event-input' />

        <button className='add-event-button' onClick={addEvent}>
            Add Event
        </button>

        <div className='event-container'>{
            boxes.map(box => 
            <div className='my-event' key={box.id}>
                <div className="event-button-container">
                    <button className='remove-event-button' onClick={() => removeEvent(box.id)}>
                        Remove
                    </button>

                    <button className='done-event-button' onClick={() => checkEvent(box.id)}>
                        Done
                    </button>
                </div>
            </div>)}
        </div>

        <div className='done-event-container'>
            {doneBoxes.map(doneBox => 
            <div className='my-done-event' key={doneBox.id}>
                <button className='delete-event-button' onClick={() => deleteEvent(doneBox.id)}>
                    Delete
                </button>
            </div>)}
        </div>
    </div>
}

export default Event;