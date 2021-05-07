import React from "react";
import data from './data'
import Todo from './Todo'
import "./style.css";

export default function App() {

  let [a,seta]=React.useState(data)
  let [s,sets]=React.useState('')
  
  const del=e=>{
   seta(a.filter(x=>x.id!==e))
  }
  const insert=e=>{
    seta([...a,{id:1.length+1,completed:false,title:s}])
  }
  return (

    <div>
      <h1>Todo App created by himanshu</h1>
      <h2>all todos {a.length}</h2>
      <div>
        <input placeholder="new..." onChange={e=>sets(e.target.value)} />
        <button onClick={insert}>add new</button>
      </div>

      <div>
        {amap(x=><Todo del={del} key={x.id} x={x}/>)}
      </div>
      

    </div>
  );
}


