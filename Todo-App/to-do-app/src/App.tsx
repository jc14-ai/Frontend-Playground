import Task from './features/task/Task.tsx'
import Event from './features/event/Event.tsx'
import './App.css'

function App(){
  /*
  Features of to do app:
  Tasks
  -add task
  -edit task
  -check task
  -remove task

  Events
  -add event
  -edit event
  -check event
  -remove event

  Task and Events
  -date added
  -date finished
  */

  return <div className='App'>
  <Task />
  <Event/>
  </div>
}

export default App;