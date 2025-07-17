import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <div className='Profile-Pic'>
          <img src='images/profile.jpg' className='Picture'/>
        </div>
        <div className='Profile'>
          <div className='Info-Container'>
            <p className='Label'>NAME</p>
            <p className='Name'>Jestaly Joseph A. Castillo</p>
          </div>
          <div className='Info-Container'>
            <p className='Label'>AGE</p>
            <p className='Age'>20 years old</p>
          </div>
          <div className='Info-Container'>
            <p className='Label'>PROGRAM</p>
            <p className='Program'>Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
