
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const[inputValue, SetInputValue]= useState();
  const [todoList, settodoList]= useState([])
  
  const valueChangeHandler= (e)=>{

    SetInputValue(e.target.value);
  };
  
  const addHandler= ()=> {

    settodoList(prevValue=> [...prevValue, inputValue])
    SetInputValue("")

  };

  const deleteHandler=(name)=>{

    const newlist = todoList.filter(item=> item!=name)
    settodoList(newlist);
  };

  return (
    <div className="App">
      <Navbar />
      <div className='inputContainer'>
      <input type="text"value={inputValue} onChange={valueChangeHandler}/>
      <button onClick={addHandler}>Add</button>
      </div>
      <div>
        {todoList.map((item) =>(
        <li key={item} onClick={()=>{
          deleteHandler(item)
        }}>{item}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
