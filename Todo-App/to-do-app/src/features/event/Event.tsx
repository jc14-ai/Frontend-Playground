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
    
    const addEvent = ():void => {
        if(valueRef.current){
            const input = valueRef.current.value;

            if(input.toString() === "" || input.toString().trim() === "") return;

            setCount((count: number):number => count + 1);
            setBoxes((boxes: Props[]):Props[] => [...boxes, {id: count, task: input}]);
            valueRef.current.value = "";
        }
    }

    const checkEvent = (id:number, task:string):void => {
        setDoneBoxes((doneBoxes: Props[]):Props[] => [...doneBoxes, {id: id, task: task}]);
        removeEvent(id);
    }

    const removeEvent = (id:number):void => {
        setBoxes((boxes: Props[]):Props[] => boxes.filter(box => box.id !== id));
    }

    const deleteEvent = (id:number):void => {
        setDoneBoxes((doneBoxes: Props[]):Props[] => doneBoxes.filter(box => box.id !== id));
    }

    return <div className='Event'>
        <input placeholder='To attend' className='event-input' ref={valueRef}/>

        <button className='add-event-button' onClick={addEvent}>
            Add Event
        </button>

        <div className='event-container'>
            {boxes.map((box: Props) => 
            <div className='my-event' key={box.id}>
                <p className='to-do'>{box.task}</p>
                <div className="event-button-container">
                    <img className="remove-img"
                        onClick={() => removeEvent(box.id)}
                        src={removeG}
                        onMouseEnter={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = removeW}
                        onMouseLeave={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = removeG}
                        />

                    <img className="done-img"
                        onClick={() => checkEvent(box.id, box.task)}
                        src={doneG}
                        onMouseEnter={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = doneW}
                        onMouseLeave={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = doneG}
                        />
                </div>
            </div>)}
        </div>

        <div className='done-event-container'>
            {doneBoxes.map((doneBox: Props) => 
            <div className='my-done-event' key={doneBox.id}>
                <p className='to-do-done'>{doneBox.task}</p>
                    <img className="done-img"
                        onClick={() => deleteEvent(doneBox.id)}
                        src={deleteG}
                        onMouseEnter={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = deleteW}
                        onMouseLeave={(me: React.MouseEvent<HTMLImageElement, MouseEvent>):string => me.currentTarget.src = deleteG}
                        />
            </div>)}
        </div>
    </div>
}

export default Event;