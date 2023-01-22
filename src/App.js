import React from 'react'
import'./app.css';
import { useSelector,useDispatch } from 'react-redux';
import store from './store';
import { incNumber,decNumber } from './actions/index';

function App() {
  const myState= useSelector ((state)=> store.changeTheNumber);
  const dispatch=useDispatch;
  return (
    <>
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>
      <div className="updown-container">
        <a className="down-btn" title='decrement'><span onClick={()=>dispatch(decNumber()) }>-</span></a>
        <input type="text" name="value" className='value-input' value={myState} />
        <a className="up-btn" title='increment'><span onClick={()=>dispatch(incNumber()) }>+</span></a>
      </div>
    </div>
    </>
  );
}

export default App;
